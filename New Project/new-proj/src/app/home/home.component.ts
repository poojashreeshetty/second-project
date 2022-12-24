import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any;
  usersecond: any;
  constructor(private loginservice: ServiceService) {}

  ngOnInit(): void {
    // this.gettopHeader();
    // this.getOngoingCourse(1,3);
  }
  // gettopHeader() {
  //   this.loginservice.topHeaderService().subscribe((data) => {
  //     console.log('topheaderservice',  JSON.parse(data));
  //    this.user=JSON.parse(data);
  //   });
  // }
  // getOngoingCourse(page:any,limit:any){
  //   this.loginservice.ongoingcourseService().subscribe(data=>{
  //     this.usersecond=JSON.parse(data)
  //     console.log('ongoing', this.usersecond);
  //     sessionStorage.setItem('ongoingCourse',JSON.stringify(this.usersecond[0].courseId));
  //   })
  // }
}


// searchOutlets(lat:any, lang:any, brandId:any, type:any, rate:any){

//   const parms = new HttpParams()
//   .set('longitude',lang)
//   .set('latitude',lat)
//   .set('brandId',brandId)

  

//   return this.http.get(environment.url + 'Lorem/Search?longitude= ' + lat + '&latitude=' + lang +'&brandId=' + brandId +'&restaurantOrFoodType=' + type +'&descRating'+rate)

// }
