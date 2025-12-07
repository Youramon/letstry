import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { listMemba } from 'src/app/folder/listMemba';
import *as dbbu from "src/app/folder/dbbackup"
import { SupabaseService } from 'src/app/supabase.service';

@Component({
    selector: 'app-dbbackup',
    templateUrl: './dbbackup.page.html',
    styleUrls: ['./dbbackup.page.scss'],
    standalone: false
})
export class DbbackupPage implements OnInit {
  public jzListe: listMemba[] =  [];
  private currentListKey: string = 'search-engines';
  
constructor(private navCtrl: NavController, private supabase: SupabaseService) { }
  goBack() {
    this.navCtrl.back();
  }
  
  async ngOnInit() {
    // Load initial list
    await this.fetchListFromSupabase(this.currentListKey);
  }
  
  async handleChange(e:any){
    this.currentListKey = e.detail.value;
    await this.fetchListFromSupabase(this.currentListKey);
  }
  
  private async fetchListFromSupabase(listKey: string) {
    const tableName = dbbu.alleListenBUStr[listKey];
    
    if (!tableName) {
      console.error('Keine Tabelle gefunden für:', listKey);
      return;
    }
    
    const data = await this.supabase.getListData(tableName);
    
    if (data && data.length > 0) {
      // Find the maximum Platzierung to calculate reversal
      const maxPlatzierung = Math.max(...data.map((item: any) => item.Platzierung));
      
      // Convert data to listMemba objects with reversed order
      this.jzListe = data
        .map((item: any) => {
          // Calculate reversed position: item with highest Platzierung comes first
          const reversedPosition = maxPlatzierung - item.Platzierung;
          return new listMemba(
            item.title || item.Title || '',
            reversedPosition,
            item.link || item.Link || ''
          );
        })
        // Sort by reversed position (0 first, then 1, 2, etc.)
        .sort((a, b) => a.initPos - b.initPos);
    } else {
      console.log('Keine Daten gefunden für Tabelle:', tableName);
      this.jzListe = [];
    }
  }
}
