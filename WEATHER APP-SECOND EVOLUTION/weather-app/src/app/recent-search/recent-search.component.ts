import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClearAllDilogueComponent } from '../clear-all-dilogue/clear-all-dilogue.component';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {
  date:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.date=new Date();
  }
  openDialog(): void {
    this.dialog.open(ClearAllDilogueComponent, {
      width: '450px',
      
    });
  }
}
