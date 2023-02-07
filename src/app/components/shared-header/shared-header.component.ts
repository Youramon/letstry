import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, PopoverController } from '@ionic/angular';
import { FolderPageRoutingModule } from 'src/app/folder/folder-routing.module';
import { PopoverpageComponent } from 'src/app/popoverpage/popoverpage.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
  ],
  selector: 'app-shared-header',
  templateUrl: './shared-header.component.html',
  styleUrls: ['./shared-header.component.scss'],
})
export class SharedHeaderComponent implements OnInit {
@Input() title: string;

  constructor(private popoverCtrl: PopoverController) { }
  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverpageComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  ngOnInit() {}

}
