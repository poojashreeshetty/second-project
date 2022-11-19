import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantes-details',
  templateUrl: './plantes-details.component.html',
  styleUrls: ['./plantes-details.component.css']
})
export class PlantesDetailsComponent implements OnInit {
  planets: any;

  constructor() { }

  ngOnInit(): void {
    this.planets=JSON.parse(localStorage.getItem('planets')as any);

  }

}
