import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAnAccDialogComponent } from '../create-an-acc-dialog/create-an-acc-dialog.component';
import { LogindialogComponent } from '../logindialog/logindialog.component';

@Component({
  selector: 'app-face1',
  templateUrl: './face1.component.html',
  styleUrls: ['./face1.component.css']
})
export class Face1Component implements OnInit {

  constructor(private md:MatDialog,) { }
  show:boolean=false;
  ngOnInit(): void {
  }


  show_nearby(){
    if(this.show == false)
    this.show = true;
    else 
    this.show=false;
  }

  openDialog(){
    this.md.open(LogindialogComponent)
  }

  openCreateAccDialog(){
    this.md.open(CreateAnAccDialogComponent);
  }

}
