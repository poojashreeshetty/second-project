import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>you selected department with id = {{departmentId}}</h3>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
public departmentId:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    this.departmentId=id;
  }

}
