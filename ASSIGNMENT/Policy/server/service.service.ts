import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interface } from 'readline';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})

 interface login{
  name:String,
  password:Number
}
export class ServiceService {
  
  constructor(private http : HttpClient) { }
  getInfo():Observable<login>{
return (this.http.get<login>('http://localhost:3000/login'));
}
}
