import { Component, OnInit } from '@angular/core';
import { StarWarserviceService } from '../star-warservice.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  urlVehicles = 'https://swapi.dev/api/vehicles/';
  vehicle: any;

  constructor(public service: StarWarserviceService) { }

  ngOnInit(): void {
    this.service.getApi(this.urlVehicles).subscribe((data) => {
      this.vehicle = data;
      console.log(this.vehicle);
    });
  }

  nextApi() {
    this.service.getApi(this.vehicle.next).subscribe((data) => {
      this.vehicle = data;
    });
  }

  previousApi() {
    this.service.getApi(this.vehicle.previous).subscribe((data) => {
      this.vehicle = data;
    });
  }

  character(data: any) {
    localStorage.setItem('vehicle', JSON.stringify(this.vehicle.results[data]));
  }
}
