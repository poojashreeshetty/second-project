import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-straship-details',
  templateUrl: './straship-details.component.html',
  styleUrls: ['./straship-details.component.css']
})
export class StrashipDetailsComponent implements OnInit {
  starship: any;

  constructor() { }

  ngOnInit(): void {
    this.starship=JSON.parse(localStorage.getItem('starship')as any);

  }

}
