import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveAllDilogueComponent } from '../remove-all-dilogue/remove-all-dilogue.component';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  date:any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.date=new Date();

  }
  openDialog(): void {
    this.dialog.open(RemoveAllDilogueComponent, {
      width: '450px',
      
    });
  }

}
