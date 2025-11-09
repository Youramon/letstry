import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular'
import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js'
import { environment } from '../environments/environment'

export interface Profile {
  username: string
  website: string
  avatar_url: string
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  
  private supabase: SupabaseClient;
  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController) { 
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)
  }
  get user() {
    return this.supabase.auth.getUser("nBlFFUshX3G1y6lyfz5+OzHKAWMGG3f/40GtxxntTga+rfutQXOFFvkptpxOXVyXSR6CsFKDIGJd7XDfqLyqhA==")
  }

  get session() {
    return this.supabase.auth.getSession()
  }

  async getListData(tableName: string) {
    try {
      const { data, error } = await this.supabase
        .from(tableName)
        .select('*')
        .order('Platzierung', { ascending: true });
      
      if (error) {
        console.error('Fehler beim Laden der Daten:', error);
        return null;
      }
      
      return data;
    } catch (err) {
      console.error('Unerwarteter Fehler:', err);
      return null;
    }
  }
  
  async insertListItem(tableName: string, item: any) {
    const { data, error } = await this.supabase
      .from(tableName)
      .insert([item])
      .select();
    
    if (error) {
      console.error('Fehler beim Einfügen:', error);
    }
    
    return { data, error };
  }

  async updateListItem(tableName: string, id: number, updates: any) {
    const { data, error } = await this.supabase
      .from(tableName)
      .update(updates)
      .eq('id', id)
      .select();
    
    if (error) {
      console.error('Fehler beim Aktualisieren:', error);
    }
    
    return { data, error };
  }
  /*
  get profile() {
    return this.supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', this.user?.id)
      .single()
  }
*/
  authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
    return this.supabase.auth.onAuthStateChange(callback)
  }

  //NOCH SIGN IN METHODE BEI https://supabase.com/docs/reference/javascript/auth-signup

  async signIn(email: string, password: string){
 return await this.supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
  }
  signOut() {
    return this.supabase.auth.signOut()
  }

  /* updateProfile(profile: Profile) {
    const update = {
      ...profile,
      id: this.user?.id,
      updated_at: new Date(),
    }

    return this.supabase.from('profiles').upsert(update, {
      returning: 'minimal', // Don't return the value after inserting
    })
  }
*/
  downLoadImage(path: string) {
    return this.supabase.storage.from('avatars').download(path)
  }

  uploadAvatar(filePath: string, file: File) {
    return this.supabase.storage.from('avatars').upload(filePath, file)
  }

  async createNotice(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 5000 })
    await toast.present()
  }

  createLoader() {
    return this.loadingCtrl.create()
  }
}
