import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css'],
})
export class CourseOverviewComponent implements OnInit {
  active = 'active';
  active1 = 'no-active';
  part2Chap = false;
  part2Over = true;
  part1video = true;
  expand = false;
  removePlus = true;
  removeminus = false;
  act = 'act';
  act1 = 'no-act';
  demo1 = true;
  getCourseId: any;
  user: any;
  constructor(private loginservice: ServiceService, private router: Router) {}

  ngOnInit(): void {
    // this.getCourseId = sessionStorage.getItem('courseid');
    this.courseOverView();
  }
  over() {
    this.act = 'act';
    this.act1 = 'no-act';
    this.part2Over = true;
    this.part2Chap = false;
    this.part1video = true;
  }
  chap() {
    this.act = 'no-act';
    this.act1 = 'act';
    this.part2Over = false;
    this.part2Chap = true;
    this.part1video = false;
  }
  plus() {
    this.expand = true;
    this.removePlus = false;
    this.removeminus = true;
  }

  minus() {
    this.expand = false;
    this.removePlus = true;
    this.removeminus = false;
  }
  mblOver() {
    this.act = 'act';
    this.act1 = 'no-act';
  }
  mblChap() {
    this.act = 'no-act';
    this.act1 = 'act';
  }

  courseOverView() {
    this.loginservice.courseOverViewService().subscribe((data: any) => {
        console.log("overview",data);
        this.user = data;
      });
  }
}
