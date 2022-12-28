import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-top-des',
  templateUrl: './top-des.component.html',
  styleUrls: ['./top-des.component.css']
})
export class TopDesComponent implements OnInit {
  userbusiness: any;

  constructor(private loginservice: ServiceService) { }

  ngOnInit(): void {
    this.loginservice.topCoursesIndesignServiceSeall().subscribe((data) => {
      this.userbusiness = data;
      console.log('userBusiness', this.userbusiness);
      // sessionStorage.setItem('ongoingCourse',JSON.stringify(this.usersecond[0].courseId));
    });
  }
  }


// topCoursesIndesignServiceSeall
