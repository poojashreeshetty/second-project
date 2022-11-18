import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StarWarserviceService {

  constructor(private http: HttpClient) { }


  getApi(){
    return this.http.get('https://swapi.dev/api/people/?page=1');
  }
}
