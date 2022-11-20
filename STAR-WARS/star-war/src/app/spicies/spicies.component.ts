import { Component, OnInit } from '@angular/core';
import { StarWarserviceService } from '../star-warservice.service';

@Component({
  selector: 'app-spicies',
  templateUrl: './spicies.component.html',
  styleUrls: ['./spicies.component.css'],
})
export class SpiciesComponent implements OnInit {
  load = true;
  unload = false;
  urlSpecies = 'https://swapi.dev/api/species/';
  species: any;
  disableP = '';
  disableN = '';

  constructor(public service: StarWarserviceService) {}

  ngOnInit(): void {
    this.service.speciesApi(this.urlSpecies).subscribe((data) => {
      this.species = data;
      this.load = false;
      this.unload = true;
      this.disableP = 'disable';
      this.disableN = 'enable';
    });
  }
  nextApi() {
    this.service.getApi(this.species.next).subscribe((data) => {
      this.species = data;
      this.load = false;
      this.unload = true;
      this.visible(this.species);
    });
  }

  previousApi() {
    this.service.getApi(this.species.previous).subscribe((data) => {
      this.species = data;
      this.load = false;
      this.unload = true;
      this.visible(this.species);
    });
  }

  character(data: any) {
    localStorage.setItem('species', JSON.stringify(this.species.results[data]));
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
