import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  getCityResults: any;

  text: string = 'Add to favourite';
  color = 'no-color';
  border = 'favorite_border';
  favCityDetail: any;
  temperature: any;
  favCity: any;



  active='active';
  active1='no-active';
  constructor(public router:Router) {}

  ngOnInit(): void {
    this.getCityResults = JSON.parse(
      localStorage.getItem('cityDetails') || '{}'
    );
    console.log(this.getCityResults);

    this.temperature = (this.getCityResults['main'].temp - 273.15).toFixed(0);

    this.favCity = JSON.parse(localStorage.getItem('fvtfinalkey') as any);
    console.log(this.favCity);

    if (this.favCity) {
      for (let fc of this.favCity) {
        if (fc['name'] == this.getCityResults['name']) {
          this.border = 'favorite';
          this.text = 'Added to  favourite';
          this.color = 'color';
          break;
        } else {
          this.border = 'favorite_border';
          this.text = 'Add to  favourite';
          this.color = 'no-color';
        }
      }
    }
    if((JSON.parse(localStorage.getItem('deg')as any))=='cel'){
      this.cel();
    }
    else{
      this.far();
    }

    localStorage.setItem('url',JSON.stringify(this.router.url));
  }

  onClickFav() {
    this.color == 'no-color'
      ? (this.color = 'color')
      : (this.color = 'no-color');
    this.text == 'Add to favorite'
      ? (this.text = 'Added to favourite')
      : (this.text = 'Add to favorite');
    this.border == 'favorite_border'
      ? (this.border = 'favorite')
      : (this.border = 'favorite_border');

    this.favCityDetail = localStorage.getItem('cityDetails');
    this.favCityDetail = JSON.parse(this.favCityDetail);
    // console.log( this.favCityDetail);

    if(this.border=='favorite')
    {
      this.favdisplaData(this.favCityDetail);

    }

    else if(this.border=='favorite_border'){
let favs;
favs=JSON.parse(localStorage.getItem('fvtfinalkey') as any);
let current=favs.find((cur:any)=>{
  return cur['name']==this.favCityDetail['name'];
})
favs.splice(favs.indexOf(current),1);
localStorage.setItem('fvtfinalkey',JSON.stringify(favs));
    }


  }
  favdisplaData(data: any) {
    let favtcityArry = [];
    let fvtfinal: any;
    if (localStorage.getItem('fvtfinalkey')) {
      fvtfinal = localStorage.getItem('fvtfinalkey');
      fvtfinal = JSON.parse(fvtfinal);
      favtcityArry = [data, ...fvtfinal];
    } else {
      favtcityArry = [data];
    }
    localStorage.setItem('fvtfinalkey', JSON.stringify(favtcityArry));
    //  console.log(localStorage.getItem('fvtfinalkey'));
  }



  cel() {
    this.temperature = (this.getCityResults['main'].temp - 273.15).toFixed(0);
    this.active='active';
    this.active1='no-active';
    localStorage.setItem('deg',JSON.stringify('cel'))
  }

  far() {
    this.temperature = (
      (this.getCityResults['main'].temp - 273.15) * (9 / 5) +
      32
    ).toFixed(0);

    this.active1='active';
    this.active='no-active';
    localStorage.setItem('deg',JSON.stringify('fan'))

  }
}
