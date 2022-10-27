import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-policy-home',
  templateUrl: './policy-home.component.html',
  styleUrls: ['./policy-home.component.css'],
})
export class PolicyHomeComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  constructor() {}
  // //body part
  // public lists = [
  //   'ISMS questionaries',
  //   'PA questionaries ',
  //   'process questionaries',
  // ];
  ngOnInit(): void {}
  
}
