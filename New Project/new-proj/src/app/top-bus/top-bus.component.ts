import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-top-bus',
  templateUrl: './top-bus.component.html',
  styleUrls: ['./top-bus.component.css']
})
export class TopBusComponent implements OnInit {
  userbusiness: any;

  constructor(private loginservice: ServiceService) { }

  ngOnInit(): void {
    this.loginservice.topCoursesInbusServiceSeaall().subscribe((data) => {
      this.userbusiness = data;
      console.log('userBusiness', this.userbusiness);
      // sessionStorage.setItem('ongoingCourse',JSON.stringify(this.usersecond[0].courseId));
    });
  }

}
