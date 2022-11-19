import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  people: any;

  constructor() { }

  ngOnInit(): void {
    this.people=JSON.parse(localStorage.getItem('people')as any);
  }

}
