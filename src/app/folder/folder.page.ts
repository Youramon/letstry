import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import *as db from "./db"
import *as logik from "./logik"
import { listMemba } from './listMemba';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
}) 
 


export class FolderPage implements OnInit {
 
  public wurdeAlörtgezeigt: boolean = false;
  public isOpen: boolean = false;
  public folder!: string;
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
 public jzListe: listMemba[] = [new listMemba("aaa",45,"bbb")];

constructor(private activatedRoute: ActivatedRoute, private alertController: AlertController) { }


 
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
   
      this.jzListe = db.alleListen[this.folder];
      for(var i = 0; i < 3; i++)
      {
      this.randcolorray[i] = this.randcolor();
      this.randcolorray2[i] = this.randcolor();
      }
    
  
    }

}

//aaa 