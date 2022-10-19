import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
array=[{
  name:'pooja',
  age:22
}]
  constructor(private demo:DemoService,private router:Router,private demo1:DemoService) { }

  ngOnInit(): void {
    //console.log(this.array)
    this.demo1.getDemo1().subscribe(function(databack){
    console.log(databack)
    })

  }
  submit(){
    //console.log(this.array);
    this.demo.saveData(this.array);
    this.router.navigate(['demo1']);
  }


}
