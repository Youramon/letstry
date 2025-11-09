import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import *as db from "./db"
import *as logik from "./logik"
import { listMemba } from './listMemba';
import { AlertController, LoadingController } from '@ionic/angular';
import { SupabaseService } from '../supabase.service';




@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
    standalone: false
}) 
 


export class FolderPage implements OnInit {
 
  public wurdeAlörtgezeigt: boolean = false;
  public isOpen: boolean = false;
  public folder!: string;
  public tableName!: string;
  public counter = 0;
  public randcolorray = [1,5,7]
  public randcolorray2 = [2,6,8]
  
  randcolor(){
    return Math.round(Math.random()*255);
  }

  
async listentest(){
 
  
    this.counter = this.counter + 1;
    logik.listSort(this.folder)
    if(this.jzListe.length == 3){
    const alert = await this.alertController.create({
          header: 'Achtung!',
          subHeader: 'Länge der Liste wird kritisch uwu',
          message: 'Recherchier schonmal nach etwas Neuem',
          backdropDismiss: false,
          buttons: ['OK'],
        });

        await alert.present();
        this.wurdeAlörtgezeigt = true;
      }
      else if (this.jzListe.length === 1)
      {
        const alert = await this.alertController.create({
          header: 'Limit der Listen erreicht',
          message: 'Gib hier dein neues Item ein',
          backdropDismiss: false,
          inputs: [
            {
            name: "name",
            type: "text",
            placeholder: "Gebe hier den Name ein"
            },
            {
              name: "link",
              type: "text",
              placeholder: "Gebe hier den Link ein"
            }
          ],
          buttons: [
            {
              text: "noch Warten",
              role: "cancel"
            },
            {
            text: 'Bestätigen',
            handler: (alertData) => {
          this.jzListe = (logik.neueItemsRein(alertData.name, alertData.link, this.folder));
             }
          }],
        });

        await alert.present();
      }
  }
 public jzListe: listMemba[] = [];

constructor(
  private activatedRoute: ActivatedRoute, 
  private alertController: AlertController,
  private supabaseService: SupabaseService,
  private loadingController: LoadingController
) { }


 
  async ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    
    // Tabellenname aus alleListenStr holen
    this.tableName = db.alleListenStr[this.folder];
    
    // Daten aus Supabase laden
    await this.loadDataFromSupabase();
      
    // Zufallsfarben generieren
    for(var i = 0; i < 3; i++) {
      this.randcolorray[i] = this.randcolor();
      this.randcolorray2[i] = this.randcolor();
    }
  }

  async loadDataFromSupabase() {
    const loading = await this.loadingController.create({
      message: 'Lade Daten...',
    });
    await loading.present();

    try {
      const data = await this.supabaseService.getListData(this.tableName);
      
      if (data && data.length > 0) {
        // Konvertiere Supabase-Daten in listMemba-Objekte
        // Beachte: Supabase verwendet großgeschriebene Spaltennamen
        this.jzListe = data.map((item: any) => 
          new listMemba(
            item.title || item.Title || '',
            item.initPos || item.InitPos || 0,
            item.link || item.Link || '',
            item.incfirst || item.Incfirst || 0,
            item.movement || item.Movement || 0
          )
        );
        console.log('Daten erfolgreich aus Supabase geladen:', this.jzListe.length, 'Einträge');
      } else {
        console.log('Keine Daten gefunden, verwende Fallback');
        // Fallback zu hardcodierten Daten falls Supabase leer ist
        this.jzListe = db.alleListen[this.folder] || [];
      }
    } catch (error) {
      console.error('Fehler beim Laden:', error);
      // Fallback zu hardcodierten Daten
      this.jzListe = db.alleListen[this.folder] || [];
    } finally {
      await loading.dismiss();
    }
  }

  async onRefreshData() {
    console.log('🔄 Aktualisiere Daten...');
    await this.loadDataFromSupabase();
  }

}

//aaa 