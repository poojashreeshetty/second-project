import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.css']
})
export class VehiclesDetailsComponent implements OnInit {
  vehicle: any;

  constructor() { }

  ngOnInit(): void {
    this.vehicle=JSON.parse(localStorage.getItem('vehicle')as any);

  }

}
