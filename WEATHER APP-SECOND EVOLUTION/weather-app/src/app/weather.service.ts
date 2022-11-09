import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(public httpClient: HttpClient) {}

  getApi(cityname: any) {
    return this.httpClient.get(`${API_URL}/weather?q=${cityname}&appid=${API_KEY}`);
   
    
  }
}
