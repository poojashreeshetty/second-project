import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveAllComponent } from '../remove-all/remove-all.component';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  show: boolean = false;
  getfavlist: any;
  fav: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getfavlist = localStorage.getItem('fvtfinalkey');
    this.getfavlist = JSON.parse(this.getfavlist);
    console.log(this.getfavlist);

    if(localStorage.getItem('fvtfinalkey')){
      this.fav=true
    }
    else{
      this.fav=false;
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RemoveAllComponent, {
      // width: '250px',
    });
  }
}
