import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service'
import { error } from 'console';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = ''
  password = "";
  constructor(private readonly supabase: SupabaseService) { }

  ngOnInit() {
  }
  async handleLogin(event: any) {
    try{
      event.preventDefault()
    }
    catch (e: any){
      console.log(e.message);
    }  
    const loader = await this.supabase.createLoader()
    await loader.present()
    try {
      console.log("Adrian Kunz")
   await this.supabase.session;
      await this.supabase.signIn(this.email, this.password)
      console.log("Nyan Monkemann")
      console.log(await this.supabase.user);
      await loader.dismiss()
      await this.supabase.createNotice('Sign in geschafft uwu')
    } catch (error: any) {
      await loader.dismiss()
      await this.supabase.createNotice(error.error_description || error.message)
    }
  
  }
}
