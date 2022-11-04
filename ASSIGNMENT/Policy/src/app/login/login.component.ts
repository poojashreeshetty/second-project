import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PolicyServiceService } from '../policy-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  count: any = 0;

  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private loginservice: PolicyServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: this.fb.control(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]*$'),
      ]),
      password: this.fb.control(
        null,[Validators.required, Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,})')]),
    });
  }

  onSubmit() {
    console.log(this.myForm);
    localStorage.setItem('user', JSON.stringify(this.myForm.value));

    this.loginservice.getInfo().subscribe((data) => {
      console.log(data);
      for (let d of data) {
        if (
          this.myForm.get('name')?.value == d.userName &&
          this.myForm.get('password')?.value == d.password
        ) {
          this.count++;
          break;
        }
      }
      if (this.count == 1) {
        console.log('password matched');
        this.router.navigate(['/policyHome']);
      } else {
        alert('invalid password');
      }
    });
  }

  // passwordCustom(control: AbstractControl): ValidatorFn {
  //   return (control: AbstractControl):{[key:string]:boolean} | null=>{
  //     if(){

  //     }
  //   }
  // }
}
