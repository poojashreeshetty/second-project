import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor() {}

  ngOnInit(): void {}

  tasks = [
    { value: 'Task one', completed: false },
    { value: 'Task two', completed: false },
    { value: 'Task three', completed: false },
  ];


  selectAllChanged(event: any) {
    // alert(event.checked)
    if (event.checked) {
      //if evnt.checked is true - select all boxes
      this.tasks = this.tasks.map((task) => {
        task.completed = true;//it will select all box
        return task;
      });
    } else {
      //unchecked all boxes
      this.tasks = this.tasks.map((task) => {
        task.completed = false;//it wont select all boxes
        return task;
      });
    }
  }
}
