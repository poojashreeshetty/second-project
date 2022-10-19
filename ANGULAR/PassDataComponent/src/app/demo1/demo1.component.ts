import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  array2=[{
    name:"shetty",
    age:19
  }]

  constructor(private demo1:DemoService,private demo:DemoService,private rotedemo:Router ){ }
 
  ngOnInit(): void {
    this.demo1.getData().subscribe((dataaaaa:any) =>{
      console.log(dataaaaa);
    })
  }

  BackToDemo(){
    //alert("clicked");
    this.demo.saveDemo1(this.array2);
    this.rotedemo.navigate(['demo']);
  }
}
