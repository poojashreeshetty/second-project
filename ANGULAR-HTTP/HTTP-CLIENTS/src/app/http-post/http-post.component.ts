import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.css']
})
export class HttpPostComponent implements OnInit {
body:any
  constructor(private demoservice:DemoService ) { }

  ngOnInit(): void {

    // post
    this.demoservice.postUser().subscribe((data)=>{
      console.log(data);
      this.body=data;
    },(err)=>{
      console.log(err)
    })

    // put
    this.demoservice.putUser().subscribe((data)=>{
      console.log(data);
    },(err)=>{
      console.log(err)
    })
  

  this.demoservice.deleteUser().subscribe((data)=>{
    console.log("delte successfully"+data)
  },(err)=>{
    console.log(err)
  })

  }

}
