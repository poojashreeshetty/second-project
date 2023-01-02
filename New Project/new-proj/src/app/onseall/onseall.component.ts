import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-onseall',
  templateUrl: './onseall.component.html',
  styleUrls: ['./onseall.component.css']
})
export class OnseallComponent implements OnInit {
  usersecondseall: any;
  constructor(private loginservice: ServiceService,private router:Router) { }

  ngOnInit(): void {
    this.loginservice.ongoingcourseallService().subscribe((data) => {
      this.usersecondseall = data;
      console.log('ongoingggggg',  this.usersecondseall);
      
      // sessionStorage.setItem('ongoingCourse',JSON.stringify(this.usersecond[0].courseId));
    });
  }

  gotoOverView(courseId: any) {
    console.log(courseId);
    sessionStorage.setItem('courseid', courseId);
    this.router.navigate(['/course']);
  }


}
