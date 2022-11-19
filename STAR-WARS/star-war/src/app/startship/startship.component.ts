import { Component, OnInit } from '@angular/core';
import { StarWarserviceService } from '../star-warservice.service';

@Component({
  selector: 'app-startship',
  templateUrl: './startship.component.html',
  styleUrls: ['./startship.component.css']
})
export class StartshipComponent implements OnInit {
  urlStarship = 'https://swapi.dev/api/starships/';
  starship: any;

  constructor(public service: StarWarserviceService) { }

  ngOnInit(): void {
    this.service.getApi(this.urlStarship).subscribe((data) => {
      this.starship = data;
      console.log(this.starship);
    });
  }
  nextApi() {
    this.service.getApi(this.starship.next).subscribe((data) => {
      this.starship = data;
    });
  }

  previousApi() {
    this.service.getApi(this.starship.previous).subscribe((data) => {
      this.starship = data;
    });
  }

  character(data: any) {
    localStorage.setItem('starship', JSON.stringify(this.starship.results[data]));
  }
}
