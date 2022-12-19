import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-logindialog',
  templateUrl: './logindialog.component.html',
  styleUrls: ['./logindialog.component.css']
})
export class LogindialogComponent implements OnInit {

emailotp=false;
mobileotp=true;
forgot = false;
login=true;
hide=true;
otpverify=false;
otp=true;
verify=false;
passwordchange=false;

  constructor(private fb: FormBuilder) { }

  showFirst:boolean=true;
  


  ngOnInit(): void {
  }
  loginDetails = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  otpselectionMobile(){
    this.emailotp=false;
    this.mobileotp=true;
  }
  otpselectionEmail(){
    this.emailotp=true;
    this.mobileotp=false;
  }
  forgetPassword(){
    this.login=false;
    this.forgot = true;
    this.otpverify=false;
    this.otp=true;
    this.verify=true;
    this.passwordchange=true;

  }
  backtologin(){
    this.login=true;
    this.forgot = false;
  }
  sendotp(){
    this.login=false;
    this.forgot=false;
    this.otpverify=true;
    this.otp=true;
    this.verify=false;
    this.passwordchange=false;
  }

  verifyotp(){
    this.otp=false;
    this.verify=true;
    this.passwordchange=false;
  }
  change(){
    this.login=true;
    this.forgot=false;
    this.otpverify=false;
    this.passwordchange=true;
    // this.forgot=true;


    this.otp=true;
    this.verify=true;

  }
  newpassword(){
    this.passwordchange=true;
    this.login=false;
    this.forgot=false;
    this.otp=false;
    this.verify=false;
    this.otpverify=true;


  }

}
