import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-seall-ongoing',
  templateUrl: './seall-ongoing.component.html',
  styleUrls: ['./seall-ongoing.component.css'],
})
export class SeallOngoingComponent implements OnInit {
  seallpop: any;
  usersecond: any;

  constructor(private loginservice: ServiceService) {}

  ngOnInit(): void {
    this.seallpop = sessionStorage.getItem('courses');
    console.log('inseall', this.seallpop);
    this.loginservice.ongoingcourseServiceseeAll(this.seallpop).subscribe((data) => {
      this.usersecond = data;
      console.log('all', this.usersecond);
      // sessionStorage.setItem('ongoingCourse',JSON.stringify(this.usersecond[0].courseId));
    });
  }
}
