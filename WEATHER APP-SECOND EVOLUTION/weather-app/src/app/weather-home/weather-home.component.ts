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
  favCityArray = [];
  recentlySerached = [];
  constructor(public weatherservice: WeatherService, public router: Router) { }

  ngOnInit(): void {
    this.date = new Date();
    this.getCity = JSON.parse((localStorage.getItem('weatherDetail') || null));
    this.favCityArray = JSON.parse((localStorage.getItem('cityData') || '[]'))
    this.recentlySerached = JSON.parse((localStorage.getItem('recentlySerached') || '[]'))


    console.log(this.favCityArray);
    console.log(this.getCity);

    // if fav-city not available then by defalut we should show add to fav button
    console.log(this.favCityArray.length <= 0)
    // if (this.favCityArray.length <= 0) {
    //   this.getCity['isFav'] = false;
    // }
    //  else {
    //   this.getCity['isFav'] = true;

    // }
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
      console.log(results);
      results['isFav'] = false;
      localStorage.setItem('weatherDetail', JSON.stringify(results));

      let recent = JSON.parse(localStorage.getItem('recentlySerached') || '[]');
      this.recentlySerached.push(results)
      console.log("recent............................", recent)
      // stored only recente 5 data
      if (recent.length < 5) {
        localStorage.setItem('recentlySerached', JSON.stringify(this.recentlySerached));
      }

      this.getCity = JSON.parse((localStorage.getItem('weatherDetail') || '{}'));
      console.log(this.getCity);
      console.log("cityarray....................", this.favCityArray)
    }, err => {
      console.log(err)
      alert('Enter city data is not available, please try with different city...')
    });
  }


  addFav(data: any) {
    console.log(!data.isFav);
    // data.isFav = !data.isFav;
    data['isFav'] = !data.isFav;
    console.log(data);
    localStorage.setItem('weatherDetail', JSON.stringify(data));
    this.favCityArray.push(data)
    console.log(this.favCityArray)
    localStorage.setItem('cityData', JSON.stringify(this.favCityArray));  //fav DATA

  }


}