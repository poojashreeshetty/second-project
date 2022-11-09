import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css'],
})
export class WeatherHomeComponent implements OnInit {
  date: any;
  getCity: any;
  routerUrl!: string;
  cityArray = [];


  constructor(public weatherservice: WeatherService, public router: Router) { }

  ngOnInit(): void {
    this.date = new Date();
    this.getCity = JSON.parse((localStorage.getItem('weatherDetail') || '{}'));
    console.log(this.getCity);
    console.log(this.router.url);
    this.routerUrl = this.router.url;




  }

  //call api by using http
  // loadApi() {
  //   this.httpClient
  //     .get(`${API_URL}/weather?q=${this.cityName}&appid=${API_KEY}`)
  //     .subscribe((results:any) => {
  //       console.log(results);
  //       this.weatherTemp=results['main'];

  //       console.log(this.weatherTemp);
  //       this.cityName=results['name'];
  //       console.log( this.cityName)

  //     });
  // }
  onClickCity(cityname: any) {
    // console.log(cityname);
    this.weatherservice.getApi(cityname).subscribe((results) => {
      // console.log(results);
      localStorage.setItem('weatherDetail', JSON.stringify(results));
      // this.router.navigate(['weather-home']).then(() => {
      //   window.location.reload();
      // });
      this.getCity = JSON.parse((localStorage.getItem('weatherDetail') || '{}'));
      console.log(this.getCity);
    });
  }


  addFav(data: any) {
    console.log(data);

    this.cityArray.push(data);
    console.log(this.cityArray);


  }


}
