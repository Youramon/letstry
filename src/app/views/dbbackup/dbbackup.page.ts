import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dbbackup',
  templateUrl: './dbbackup.page.html',
  styleUrls: ['./dbbackup.page.scss'],
})
export class DbbackupPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
    
  }

}
