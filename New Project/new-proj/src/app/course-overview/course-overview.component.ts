import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css'],
})
export class CourseOverviewComponent implements OnInit {
  getCourseId: any;
  user: any;
  showMore: boolean = true;
  showless: boolean = false;

  constructor(private loginservice: ServiceService) {}

  ngOnInit(): void {
    this.getCourseId = sessionStorage.getItem('ongoingCourse');

    // this.courseOverView(this.getCourseId);
  }
  // courseOverView(courseId: any) {
  //   this.loginservice.courseOverViewService(courseId).subscribe((data: any) => {
  //     console.log(JSON.parse(data));
  //     this.user = JSON.parse(data);
  //   });
  // }
  clickShowMore() {
    this.showless = true;
    this.showMore=false;
  }
  clickShowLess(){
    this.showless=false
    this.showMore=true;
  }
}
