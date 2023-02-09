import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';
import { SharedHeaderComponent } from '../components/shared-header/shared-header.component';
import { PopoverpagemoduleModule } from '../popoverpagemodule/popoverpagemodule.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    SharedHeaderComponent,
    PopoverpagemoduleModule
  ],
  declarations: [FolderPage],
  exports: []
})
export class FolderPageModule {}
