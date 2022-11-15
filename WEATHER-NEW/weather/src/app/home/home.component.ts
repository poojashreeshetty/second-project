import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  getCityResults: any;

  text: string = 'Add to favorite';
  color = 'no-color';
  border = 'favorite_border';
  favCityDetail: any;

  constructor() {}

  ngOnInit(): void {
    this.getCityResults = JSON.parse(
      localStorage.getItem('cityDetails') || '{}'
    );
    // console.log(this.getCityResults);
  }

  onClickFav(){
    this.color=='no-color'? this.color ='color':this.color='no-color';
    this.text=='Add to favorite' ? this.text='Added to favourite':this.text='Add to favorite';
    this.border=='favorite_border'?this.border="favorite":this.border="favorite_border";


    this.favCityDetail=(localStorage.getItem('cityDetails'));
    this.favCityDetail=JSON.parse(this.favCityDetail)
    // console.log( this.favCityDetail);
    this.favdisplaData(this.favCityDetail)
  
    
  }
  favdisplaData(data:any){
   let favtcityArry=[];
   let fvtfinal:any;
   if(localStorage.getItem('fvtfinalkey')){
    fvtfinal=(localStorage.getItem('fvtfinalkey'));
    fvtfinal=JSON.parse(fvtfinal)
    favtcityArry=[data,...fvtfinal];
   }
   else{
    favtcityArry=[data];
   }
   localStorage.setItem('fvtfinalkey',JSON.stringify(favtcityArry));
  //  console.log(localStorage.getItem('fvtfinalkey'));
  }
}
