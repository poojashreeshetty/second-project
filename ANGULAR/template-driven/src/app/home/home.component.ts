import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  reactiveForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      IdNumber: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(5),Validators.maxLength(10)]),
      Domain: new FormControl(null, [Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]*$')]),
      Email: new FormControl(null, [Validators.required,Validators.email]),
      BloodGRoup: new FormControl('A+'),
      SelfInsurance: new FormControl('yes'),
      familyInsurance: new FormControl('yes')
    });
  }

  onSubmit() {
    console.log(this.reactiveForm.get("Domain"));
  }

  get idnumber() {
    return this.reactiveForm.get('IdNumber') as FormControl;
  }
  get domain() {
    return this.reactiveForm.get('Domain') as FormControl;
  }
  get email() {
    return this.reactiveForm.get('Email') as FormControl;
  }
  get bloodgroup() {
    return this.reactiveForm.get('BloodGRoup') as FormControl;
  }
  get selfinsurance() {
    return this.reactiveForm.get('SelfInsurance') as FormControl;
  }
  get familyinsurance() {
    return this.reactiveForm.get('familyInsurance') as FormControl;
  }
}
