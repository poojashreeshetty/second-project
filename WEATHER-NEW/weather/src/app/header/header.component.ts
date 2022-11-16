import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherServiceService } from '../weather-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  active = 'active';
  cityDetails: any;
  date: any;
  weatherIcon: any;
  constructor(public weatherService: WeatherServiceService,public router:Router) {}

  ngOnInit(): void {
    this.date = new Date();
  }
  
  menuVariable: boolean = false;
  hamburger_icon_variable: boolean = false;
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.hamburger_icon_variable = !this.hamburger_icon_variable;
  }

  OnclickCity(cityname: any) {
    this.weatherService.getApi(cityname).subscribe((cityResults: any) => {

      console.log(cityResults);
      this.cityDetails=cityResults;
      localStorage.setItem('cityDetails', JSON.stringify(this.cityDetails));
      this.recentList(this.cityDetails);

      this.refresh();

      
    });




    // this.weatherIcon=` http://openweathermap.org/img/wn/ ${this.cityDetails.icon}@4x.png`

}

  recentList(data:any){
    let recentcityArry: any[]=[];
    let fl:any;
    const toIndex=0;
    if(localStorage.getItem('recentfinalkey')){
     fl=(localStorage.getItem('recentfinalkey'));
     recentcityArry=JSON.parse(fl);



     let current = recentcityArry.find((cur:any)=>{
      return cur['name']==data['name'];
     })

     if(current==undefined){
      recentcityArry=[data,...recentcityArry];

     }
     else{
      let fronIndex=recentcityArry.indexOf(current);
      let element=recentcityArry.splice(fronIndex,1)[0];
      recentcityArry.splice(toIndex,0,element)
     }
    }
    else{
      recentcityArry=[data];
    }
    localStorage.setItem('recentfinalkey',JSON.stringify(recentcityArry));
   //  console.log(localStorage.getItem('fvtfinalkey'));
   }




   enter(event:any,city:any){
    if(event.keyCode===13){
      this.OnclickCity(city);
    }

   }


   refresh(){
    this.router.navigate(['home']).then(()=>{
      window.location.reload();

    })
   }
  }

