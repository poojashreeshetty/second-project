import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-new]',
  template: `<div>inline template</div>
  <p>poojashree shetty</p>`,
  styles: [`
  div{
    color:red;
  }`]
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
