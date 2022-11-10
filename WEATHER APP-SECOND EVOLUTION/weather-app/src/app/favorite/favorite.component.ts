import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveAllDilogueComponent } from '../remove-all-dilogue/remove-all-dilogue.component';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  date: any;
  favCity: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.date = new Date();
    this.getFavCity()

  }

  getFavCity() {
    let city = JSON.parse(localStorage.getItem('cityData') || null)
    console.log(city)
    if (city) {
      this.favCity = [...new Map(city.map((m) => [m.id, m])).values()];
      console.log(this.favCity)
    }
  }


  removeFav() {
    localStorage.removeItem('cityData');
    this.favCity = []
  }



}
