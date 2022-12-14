import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router,ParamMap} from '@angular/router';


@Component({
  selector: 'app-department-detail',
  template: `
    <h3>you selected department with id = {{departmentId}}</h3>
    <button><a (click)="goPrevious()">Previous</a></button><br>
    <button><a (click)="goNext()">Next</a></button>

    <div>
    <button (click)="gotoDepartments()">Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
public departmentId:any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //let id=this.route.snapshot.paramMap.get('id');
    //this.departmentId=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.departmentId=id;
    });
  }
  goPrevious(){
    let previousId=this.departmentId-1;
    this.router.navigate(['/departments',previousId]);
  }

  goNext(){
    let nextId=parseInt(this.departmentId)+1;
    this.router.navigate(['/departments',nextId]);
  }

  gotoDepartments(){
    let selectedId=this.departmentId?this.departmentId:null;
    //this.router.navigate(['/departments',{id:selectedId,test:'testvalue'}])
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route});
  }
 
}
