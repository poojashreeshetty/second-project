import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Builtin-pipes in angular';
  username: string | undefined;
  answer:string | undefined;

  onclick(name: any) {
     this.answer=name;
  }
  users: any[] = [
    {
      id: 101,
      name: 'pooja',
      city: 'DELHI',
      salary: 2,
      dob: new Date('05/10/1989'),
    },
    {
      id: 102,
      name: 'peter',
      city: 'PUNE',
      salary: 80000,
      dob: new Date('05/12/1985'),
    },
    {
      id: 103,
      name: 'omed',
      city: 'GOA',
      salary: 190000,
      dob: new Date('10/10/1991'),
    },
    {
      id: 104,
      name: 'kunal',
      city: 'DELHI',
      salary: 55000,
      dob: new Date('12/18/1987'),
    },
  ];
}
