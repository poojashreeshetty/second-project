import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'localStorage';
  public user = [
    { name: 'pooja', age: 22, lastname: 'shetty' },
    { name: 'naga', age: 23, lastname: 'naik' },
    { name: 'ashu', age: 24, lastname: 'setty' },
    { name: 'tanvi', age: 25, lastname: 'vernekar' },
  ];
  setuser: any;
  getuser: any;
  finaluser: any;
  user2: any;
  finaluser2: any;
  ngOnInit() {
    this.setuser = localStorage.setItem('users', JSON.stringify(this.user));
    console.log(this.setuser);

    this.setuser = sessionStorage.setItem('users', JSON.stringify(this.user));
    console.log(this.setuser);


    this.getuser = localStorage.getItem('users');
    console.log(this.getuser);
    // console.log(typeof(this.getuser));
    this.finaluser = JSON.parse(this.getuser);
    console.log(this.finaluser);

    this.user2 = localStorage.getItem('anotheruser');
    this.finaluser2 = JSON.parse(this.user2);
  }
}
