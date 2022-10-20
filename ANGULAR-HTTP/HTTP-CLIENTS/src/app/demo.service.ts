import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { Observable } from 'rxjs';
interface User{
  name:string;
  email:string;
  phonenumber:number
}

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http:HttpClient) { }
  getUsers():Observable<User>{
    const header=new HttpHeaders(
      {
        'content-type':'application/json',
        'authenticationToken':'12345'
      }
    );
    const param=new HttpParams()
    .set('pageNum','10')
    .set('pageSize','100');
    
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users',{headers:header,params:param});
  }
}
