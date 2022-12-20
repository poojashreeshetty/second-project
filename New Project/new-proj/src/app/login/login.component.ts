import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:ServiceService) { }

  ngOnInit(): void {
  }
  logincontinue(){
    this.loginservice.loginfromService().subscribe((data)=>{
      console.log(data);
      let token:any=data.headers.get('jwt-token');
      sessionStorage.setItem('token',token)
      
    })
  }
}
