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
  load = true;
  unload = false;
  disableP = '';
  disableN = '';
  constructor(public service: StarWarserviceService) { }

  ngOnInit(): void {
    this.service.getApi(this.urlPlanets).subscribe((data) => {
      this.planets = data;
      console.log(this.planets);
      this.load = false;
      this.unload = true;
      this.disableP = 'disable';
      this.disableN = 'enable';
    });
  }
  nextApi() {
    this.service.getApi(this.planets.next).subscribe((data) => {
      this.planets = data;
      this.load = false;
      this.unload = true;
      this.visible(this.planets);

    });
  }

  previousApi() {
    this.service.getApi(this.planets.previous).subscribe((data) => {
      this.planets = data;
      this.load = false;
      this.unload = true;
      this.visible(this.planets);

    });
  }

  character(data: any) {
    localStorage.setItem('planets', JSON.stringify(this.planets.results[data]));
  }
  visible(data: any) {
    if (data?.previous === null) {
      this.disableP = 'disable';
    } else {
      this.disableP = 'enable';
    }
    if (data?.next === null) {
      this.disableN = 'disable';
    } else {
      this.disableN = 'enable';
    }
  }
}
