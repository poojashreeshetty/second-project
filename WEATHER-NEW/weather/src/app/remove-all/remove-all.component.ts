import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-all',
  templateUrl: './remove-all.component.html',
  styleUrls: ['./remove-all.component.css']
})
export class RemoveAllComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  removeall(){
    localStorage.removeItem('fvtfinalkey');
    window.location.reload();
  }
}
