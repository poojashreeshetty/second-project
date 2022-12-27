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
  active1 = 'noactive';
  active2 = 'active';
  active3 = 'active';
  userbusiness: any;
  userdesign: any;
  count = 0;
  userheader: any;

  constructor(private loginservice: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.getName();
    this.getOngoingCourse();
    this.topserachCategory();
    this.function('All');
    this.topCoursesInBusiness();
    this.topCoursesInDesign();
    this.nextpage();
    // this.ChoiceYourCOurse();
  }
  getName() {
    this.loginservice.getNameService().subscribe((data) => {
      // console.log(data);
      this.fullname = JSON.parse(data);
    });
  }

  nextpage() {
    this.count = ++this.count;
    console.log("vv" ,this.count);
    this.gettopHeader()
  }
  prevpage() {
    this.count = --this.count;
    console.log("vv" ,this.count);
    
    this.gettopHeader()
  }

  gettopHeader() {
    this.loginservice.topHeaderService(this.count).subscribe((data) => {
      console.log('topheaderservice', JSON.parse(data));
      this.userheader = JSON.parse(data);
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
  one() {
    this.active1 = 'noactive';
    this.active2 = 'active';
    this.active3 = 'active';
  }
  two() {
    this.active1 = 'active';
    this.active2 = 'noactive';
    this.active3 = 'active';
  }
  three() {
    this.active1 = 'active';
    this.active2 = 'active';
    this.active3 = 'noactive';
  }

  gotoOverView(courseId: any) {
    console.log(courseId);
    sessionStorage.setItem('courseid', courseId);
    this.router.navigate(['/course']);
  }

  topCoursesInBusiness() {
    this.loginservice.topCoursesInbusService().subscribe((data) => {
      this.userbusiness = data;
      console.log('userBusiness', this.userbusiness);
      // sessionStorage.setItem('ongoingCourse',JSON.stringify(this.usersecond[0].courseId));
    });
  }

  topCoursesInDesign() {
    this.loginservice.topCoursesIndesignService().subscribe((data) => {
      this.userdesign = data;
      console.log('userBusinessdd', this.userdesign);
      // sessionStorage.setItem('ongoingCourse',JSON.stringify(this.usersecond[0].courseId));
    });
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
