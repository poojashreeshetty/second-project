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
  load = true;
  unload = false;
  disableP = '';
  disableN = '';
  constructor(public service: StarWarserviceService) {}

  ngOnInit(): void {
    this.service.getApi(this.url).subscribe((data) => {
      this.people = data;
      console.log(this.people);
      this.load = false;
      this.unload = true;
      this.disableP = 'disable';
      this.disableN = 'enable';
    });
  }

  nextApi() {
    this.service.getApi(this.people.next).subscribe((data) => {
      this.people = data;
      this.load = false;
      this.unload = true;
      this.visible(this.people);

    });
  }

  previousApi() {
    this.service.getApi(this.people.previous).subscribe((data) => {
      this.people = data;
      this.load = false;
      this.unload = true;
      this.visible(this.people);

    });
  }

  character(data: any) {
    localStorage.setItem('people', JSON.stringify(this.people.results[data]));
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
