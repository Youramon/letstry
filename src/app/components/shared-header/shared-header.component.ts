import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverpageComponent } from 'src/app/popoverpage/popoverpage.component';
import *as db from "src/app/folder/db"


@Component({
    selector: 'app-shared-header',
    templateUrl: './shared-header.component.html',
    styleUrls: ['./shared-header.component.scss'],
    standalone: false
})
export class SharedHeaderComponent implements OnInit {
  @Input() title: string;
  @Output() refresh = new EventEmitter<void>();
  popover:any;

  constructor(private popoverCtrl: PopoverController) { }

  onRefresh() {
    this.refresh.emit();
  }

  async presentPopover(ev: any) {
db.setPopover( await this.popoverCtrl.create({
      component: PopoverpageComponent,
      event: ev,
      translucent: true
    }));
    return await db.popover.present();
  }
  ngOnInit() {}

}
