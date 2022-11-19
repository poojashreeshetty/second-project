import { Component, OnInit } from '@angular/core';
import { StarWarserviceService } from '../star-warservice.service';

@Component({
  selector: 'app-spicies',
  templateUrl: './spicies.component.html',
  styleUrls: ['./spicies.component.css']
})
export class SpiciesComponent implements OnInit {
  urlSpecies = 'https://swapi.dev/api/species/';
  species: any;

  constructor(public service: StarWarserviceService) { }

  ngOnInit(): void {
    this.service.speciesApi(this.urlSpecies).subscribe(data=>{
      this.species=data;
    })
  }
  nextApi() {
    this.service.getApi(this.species.next).subscribe((data) => {
      this.species = data;
    });
  }

  previousApi() {
    this.service.getApi(this.species.previous).subscribe((data) => {
      this.species = data;
    });
  }

  character(data: any) {
    localStorage.setItem('species', JSON.stringify(this.species.results[data]));
  }
}
