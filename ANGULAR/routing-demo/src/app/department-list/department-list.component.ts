import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
    <li (click)="onSelect(department)"[class.selected]="isSelected(department)" *ngFor ="let department of departments">
    <button class="btn"><span class="badge">{{department.id}}</span>{{department.name}}</button>
    </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {
public selectedId:any;
  departments=[
    {"id":1,"name":"Aangular"},
    {"id":2,"name":"Node"},
    {"id":3,"name":"MongoDB"},
    {"id":4,"name":"Ruby"},
    {"id":5,"name":"Bootstrap"},
    ]

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=params.get('id');
      this.selectedId=id;
    });
  }
  onSelect(department:any){
//this.router.navigate(['/departments',department.id]);
this.router.navigate([department.id],{relativeTo:this.route});

  }
  isSelected(department:any){
    return department.id===parseInt(this.selectedId);
   }

}
