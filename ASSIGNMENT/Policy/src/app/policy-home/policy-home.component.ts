import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddAdminDilogComponent } from '../add-admin-dilog/add-admin-dilog.component';
import { PolScreenDilogueComponent } from '../pol-screen-dilogue/pol-screen-dilogue.component';


@Component({
  selector: 'app-policy-home',
  templateUrl: './policy-home.component.html',
  styleUrls: ['./policy-home.component.css'],
})
export class PolicyHomeComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  // dialog: any;

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor(public dialog: MatDialog) {}
  
  // openDialog() {
  //   this.dialog.open(PolScreenDilogueComponent);
  // }
  // //body part
  // public lists = [
  //   'ISMS questionaries',
  //   'PA questionaries ',
  //   'process questionaries',
  // ];
  // constructor() {}
  showMe:boolean=false;
  background:boolean=true;


  buttonCLick(){
    this.showMe=!this.showMe;
    // this.dialog.open(PolScreenDilogueComponent);
    
  }
  openDialog() {
    const dialogRef = this.dialog.open(PolScreenDilogueComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogAdmin() {
    const dialogRef = this.dialog.open(AddAdminDilogComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
  ngOnInit(): void {}
  
}
