import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import *as db from "./db"
import *as logik from "./logik"
import {DbbackupPage} from "src/app/views/dbbackup/dbbackup.page"
import { SharedHeaderComponent } from '../components/shared-header/shared-header.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
 


export class FolderPage implements OnInit {
 
  
  public isOpen: boolean = false;
  public folder!: string;
  public counter = 0;
public randcolorray = [1,5,7]
public randcolorray2 = [2,6,8]
  randcolor(){
  return Math.round(Math.random()*255);
}

  listentest(){
    this.counter = this.counter + 1;
    logik.listSort()
  }
 public jzListe: logik.listMemba[] = [new logik.listMemba("aaa",45,"bbb")];

  component = DbbackupPage;
constructor(private activatedRoute: ActivatedRoute ,private router: Router) { }


 
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
   
      this.jzListe = db.alleListen[this.folder];
      for(var i = 0; i < 3; i++){
      this.randcolorray[i] = this.randcolor();
      this.randcolorray2[i] = this.randcolor();
      }
    
  }

}

//aaa