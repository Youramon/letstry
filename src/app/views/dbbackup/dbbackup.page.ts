import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import *as db from "src/app/folder/db";
import *as dbbu from "src/app/folder/dbbackup";
import *as logik from "src/app/folder/logik";

@Component({
  selector: 'app-dbbackup',
  templateUrl: './dbbackup.page.html',
  styleUrls: ['./dbbackup.page.scss'],
})
export class DbbackupPage implements OnInit {
  public jzListe: logik.listMemba[] = [new logik.listMemba("rolf",45,"kopter")];;
  
constructor(private navCtrl: NavController) { }
  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
    this.jzListe = dbbu.alleListenBU["searchEngines"];
  }
 
}
