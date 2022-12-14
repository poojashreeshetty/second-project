import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PolicyServiceService } from '../policy-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  name: any;
  pass: any;
  myForm!: FormGroup;
  id: any;

  constructor(
    private fb: FormBuilder,
    private lservice: PolicyServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('user');
    this.name = JSON.parse(this.name);
    console.log(this.name);

    this.myForm = this.fb.group({
      newpassword: this.fb.control(null, Validators.required),
      confirm_password: this.fb.control(null, Validators.required),
    });

    this.lservice.loginCheck().subscribe((data) => {
      for (let i of data) {
        if (i.userName == this.name.name) {
          
          this.id = i.id;
          console.log(this.id);

          break;
        }
      }
    });

    
  }

  onSubmit() {
    // console.log(this.myForm);

   

    if (this.myForm.get('newpassword')?.value ===this.myForm.get('confirm_password')?.value) {
      this.pass = this.myForm.get('newpassword')?.value;
      this.lservice.updateInfo(this.pass, this.name.name, this.id).subscribe();
      console.log(this.id);
      
      console.log('Password Updated');
      this.router.navigate(['policyHome']);
    } else {
      console.log('unsuccessful');
    }
  }
}
