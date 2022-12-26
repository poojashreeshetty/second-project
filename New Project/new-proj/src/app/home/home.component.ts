import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any;
  usersecond: any;
  fullname: any;
  serachcatt: any;
  chicecourse: any;
  allCourses: any;
  constructor(private loginservice: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getName();
    this.gettopHeader();
    this.getOngoingCourse();
    this.topserachCategory();
    // this.ChoiceYourCOurse();
  }
  getName() {
    this.loginservice.getNameService().subscribe((data) => {
      // console.log(data);
      this.fullname = JSON.parse(data);
    });
  }

  gettopHeader() {
    this.loginservice.topHeaderService().subscribe((data) => {
      console.log('topheaderservice', JSON.parse(data));
      this.user = JSON.parse(data);
    });
  }

  getOngoingCourse() {
    this.loginservice.ongoingcourseService().subscribe((data) => {
      this.usersecond = JSON.parse(data);
      console.log('ongoing', this.usersecond);
      // sessionStorage.setItem('ongoingCourse',JSON.stringify(this.usersecond[0].courseId));
    });
  }

  topserachCategory() {
    this.loginservice.topserchCategoryService().subscribe((data) => {
      this.serachcatt = JSON.parse(data);
      // console.log(this.serachcatt);
    });
  }

  function(courses: any) {
    const body = {
      choice: courses,
      view: '',
    };
    this.loginservice.ChoiceAllCourseService(body).subscribe((data) => {
      this.allCourses = data;
      console.log(this.allCourses);
    });
  }

  gotoOverView(courseId: any) {
    console.log(courseId);
    sessionStorage.setItem('courseid', courseId);
    this.router.navigate(['/course']);
  }

  // onclickAll(choice: any) {

  // }
  // ChoiceYourCOurse() {
  //   this.loginservice.ChoiceYOurCourseService().subscribe({
  //     next: (data) => {
  //       console.log('sss', data);

  //       this.chicecourse = JSON.parse(data);
  //       console.log('chioce', this.chicecourse);
  //     },
  //     error: (e) => {
  //       console.log(e.error);
  //     },
  //     complete: () => {
  //       console.log('hjjhfcgdfg');
  //     },
  //   });
  // }

  // onclickAll((document.getElementById('btn3') as HTMLInputElement).value){

  // };
}

// searchOutlets(lat:any, lang:any, brandId:any, type:any, rate:any){

//   const parms = new HttpParams()
//   .set('longitude',lang)
//   .set('latitude',lat)
//   .set('brandId',brandId)

//   return this.http.get(environment.url + 'Lorem/Search?longitude= ' + lat + '&latitude=' + lang +'&brandId=' + brandId +'&restaurantOrFoodType=' + type +'&descRating'+rate)

// }
