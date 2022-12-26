import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  logintoken: any;
  constructor(
    private loginservice: ServiceService,
    public fb: FormBuilder,
    private router: Router
  ) {}
  login!: FormGroup;
  ngOnInit(): void {
    this.login = this.fb.group({
      username: this.fb.control(null, [Validators.required]),
      password: this.fb.control(null, [Validators.required]),
    });
  }
  loginSubmit() {
    const body = {
      userName: this.login.get('username')?.value,
      password: this.login.get('password')?.value,
    };
    if (this.login.valid == false) {
      alert('invalid data');
    } else {
      this.loginservice.loginfromService(body).subscribe({
        next: (data) => {
          console.log(data);
          this.logintoken = data;
          if (this.logintoken.message == 'Login successful') {
            alert('Login successfull');
            this.router.navigate(['/home']);
            sessionStorage.setItem('token', this.logintoken.access_token);
          } else {
            alert('invalid credential');
          }
        },
      });
    }
  }
}
