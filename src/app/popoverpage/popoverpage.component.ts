import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import *as db from "src/app/folder/db"
@
Component({
  selector: 'app-popoverpage',
  templateUrl: './popoverpage.component.html',
  styleUrls: ['./popoverpage.component.scss'],
})
export class PopoverpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  navigatetodbbackup(){
   db.popover.dismiss();
    this.router.navigateByUrl('/dbbackup')
  }

}
