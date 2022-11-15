import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clear-all',
  templateUrl: './clear-all.component.html',
  styleUrls: ['./clear-all.component.css']
})
export class ClearAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  removeall(){
    localStorage.removeItem('recentfinalkey');
    window.location.reload();
  }
}
