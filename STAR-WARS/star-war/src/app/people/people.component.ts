import { Component, OnInit } from '@angular/core';
import { StarWarserviceService } from '../star-warservice.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  url = 'https://swapi.dev/api/people/';
  people: any;
  constructor(public service: StarWarserviceService) {}

  ngOnInit(): void {
    this.service.getApi(this.url).subscribe((data) => {
      this.people = data;
      console.log(this.people);
    });
  }

  nextApi() {
    this.service.getApi(this.people.next).subscribe((data) => {
      this.people = data;
    });
  }

  previousApi() {
    this.service.getApi(this.people.previous).subscribe((data) => {
      this.people = data;
    });
  }

  character(data: any) {
    localStorage.setItem('people', JSON.stringify(this.people.results[data]));
  }
}
