import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    console.log(form);
  }


}
