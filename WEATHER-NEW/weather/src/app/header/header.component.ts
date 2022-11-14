import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  active = 'active';
  constructor() {}

  ngOnInit(): void {}
  menuVariable: boolean = false;
  hamburger_icon_variable: boolean = false;
  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.hamburger_icon_variable = !this.hamburger_icon_variable;
  }
}
