import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

// const headers1= new HttpHeaders({'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE','Access-Control-Allow-Headers':'Content-Type, X-Auth-Token,Origin,Authrization'})

@Injectable({
  providedIn: 'root'
})
export class GetOtpService {

  constructor(private http : HttpClient) { }

  getOtp(email:any){

    const headers1= new HttpHeaders({'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE'})
    const body = {
      emailId : email
    }
    return this.http.put('https://lorem.herokuapp.com/Lorem/emails2fa',body,{'headers' : headers1});
  }
}
