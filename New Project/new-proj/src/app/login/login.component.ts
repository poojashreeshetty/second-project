import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private loginservice: ServiceService, public fb: FormBuilder) {}
  login!: FormGroup;
  ngOnInit(): void {
    this.login = this.fb.group({
      username: this.fb.control(null, [Validators.required]),
      password: this.fb.control(null, [Validators.required])
    });
   
  }
  loginSubmit(){
    const body = {
      userName: this.login.get('username')?.value,
      password: this.login.get('password')?.value,
      
    };
    this.loginservice.loginfromService(body).subscribe((data)=>{
          console.log(data);
          let token:any=data.headers.get('jwt-token');
          sessionStorage.setItem('token',token)
  
        })
  }
}
