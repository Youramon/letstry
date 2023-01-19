import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import *as db from "./db"
import *as logik from "./logik"


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public counter = 0;
  public randcolor: number[] = [254,50,2];
  listentest(){
    this.counter = this.counter +1;
    logik.listSort()
  }

  public jzListe = ["a","b","c"];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
   
      this.jzListe = db.alleListen[this.folder];
      for (var _i = 0; _i < this.randcolor.length; _i++){
        this.randcolor[_i] = Math.round(Math.random()*255);
      }
    
    
  }

}

//aaa