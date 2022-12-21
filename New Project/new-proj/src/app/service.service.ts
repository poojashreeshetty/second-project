import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
  loginfromService(body:any) {
    return this.http.put(environment.url + 'login', body,{observe:'response'});
  }
}
