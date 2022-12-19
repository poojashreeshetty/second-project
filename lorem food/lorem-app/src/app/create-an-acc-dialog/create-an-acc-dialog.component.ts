import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { GetOtpService } from '../service/get-otp.service';
import { MatDialog } from '@angular/material/dialog';
import { LogindialogComponent } from '../logindialog/logindialog.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-an-acc-dialog',
  templateUrl: './create-an-acc-dialog.component.html',
  styleUrls: ['./create-an-acc-dialog.component.css']
})




export class CreateAnAccDialogComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  constructor(private getOtp : GetOtpService,private md : MatDialog) { }

  showRight:boolean =  true;
  showVerify:boolean = false;
  showVerified:boolean = false;
  successRegi:boolean = false;

  ngOnInit(): void {
  }

  createAcc(){

    if(this.emailFormControl.valid){
      this.showRight = false;
        this.showVerify=true;
        this.getOtp.getOtp(this.emailFormControl.value).subscribe(data => console.log(data)
        );  
    }
 

    console.log(this.emailFormControl);
    
  }

  goBack(){
    this.showRight = true;
    this.showVerify = false;
    this.showVerified = false;
  }

  verify(){
    this.showRight = false;
    this.showVerify = false;
    this.showVerified = true;
  }

  done(){
    this.showRight = false;
    this.showVerify = false;
    this.showVerified = false;
    this.successRegi = true;

  }
  
  login(){
    this.md.open(LogindialogComponent);
  }

}
