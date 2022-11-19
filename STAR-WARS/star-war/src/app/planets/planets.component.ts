import { Component, OnInit } from '@angular/core';
import { StarWarserviceService } from '../star-warservice.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  urlPlanets = 'https://swapi.dev/api/planets/';
  planets: any;

  constructor(public service: StarWarserviceService) { }

  ngOnInit(): void {
    this.service.getApi(this.urlPlanets).subscribe((data) => {
      this.planets = data;
      console.log(this.planets);
    });
  }
  nextApi() {
    this.service.getApi(this.planets.next).subscribe((data) => {
      this.planets = data;
    });
  }

  previousApi() {
    this.service.getApi(this.planets.previous).subscribe((data) => {
      this.planets = data;
    });
  }

  character(data: any) {
    localStorage.setItem('planets', JSON.stringify(this.planets.results[data]));
  }

}
