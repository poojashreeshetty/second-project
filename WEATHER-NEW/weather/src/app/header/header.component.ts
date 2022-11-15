import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  active = 'active';
  cityDetails: any;
  constructor(public weatherService: WeatherServiceService) {}

  ngOnInit(): void {}
  
  menuVariable: boolean = false;
  hamburger_icon_variable: boolean = false;
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.hamburger_icon_variable = !this.hamburger_icon_variable;
  }

  OnclickCity(cityname: any) {
    this.weatherService.getApi(cityname).subscribe((cityResults: any) => {

      // console.log(cityResults);
      this.cityDetails=cityResults;
      localStorage.setItem('cityDetails', JSON.stringify(this.cityDetails));
      this.recentList(this.cityDetails);
      window.location.reload();
    });
}

  recentList(data:any){
    let recentcityArry=[];
    let fvtfinal:any;
    if(localStorage.getItem('recentfinalkey')){
     fvtfinal=(localStorage.getItem('recentfinalkey'));
     fvtfinal=JSON.parse(fvtfinal);
     recentcityArry=[data,...fvtfinal];
    }
    else{
      recentcityArry=[data];
    }
    localStorage.setItem('recentfinalkey',JSON.stringify(recentcityArry));
   //  console.log(localStorage.getItem('fvtfinalkey'));
   }
  }

