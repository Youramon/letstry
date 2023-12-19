import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { listMemba } from 'src/app/folder/listMemba';
import *as dbbu from "src/app/folder/dbbackup"

@Component({
  selector: 'app-dbbackup',
  templateUrl: './dbbackup.page.html',
  styleUrls: ['./dbbackup.page.scss'],
})
export class DbbackupPage implements OnInit {
  public jzListe: listMemba[] =  dbbu.alleListenBU["searchEngines"];
  
constructor(private navCtrl: NavController) { }
  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
    this.jzListe = dbbu.alleListenBU["searchEngines"];
    
  }
 handleChange(e:any){
  this.jzListe = dbbu.alleListenBU[e.detail.value]
 }
}
