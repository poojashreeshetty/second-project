import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: ['./weather-home.component.css']
})
export class WeatherHomeComponent implements OnInit {
  date: any;

  constructor() { }

  ngOnInit(): void {
    this.date=new Date();
  }

}
