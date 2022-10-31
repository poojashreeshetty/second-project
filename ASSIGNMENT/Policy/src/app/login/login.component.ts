import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
 selector: 'app-login',
 templateUrl: './login.component.html',
 styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 myForm!: FormGroup;
 constructor(private fb: FormBuilder) { }

 ngOnInit(): void {
  this.myForm = this.fb.group({
   name: this.fb.control(null, Validators.required),
   password: this.fb.control(null, Validators.required)
  })
 }
 onSubmit() {
  console.log(this.myForm);

 }

}