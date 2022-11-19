import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spicies-details',
  templateUrl: './spicies-details.component.html',
  styleUrls: ['./spicies-details.component.css']
})
export class SpiciesDetailsComponent implements OnInit {
  species: any;

  constructor() { }

  ngOnInit(): void {
    this.species=JSON.parse(localStorage.getItem('species')as any);
    console.log(  this.species);
    

  }

}
