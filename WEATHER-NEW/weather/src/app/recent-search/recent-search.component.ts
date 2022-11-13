import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClearAllComponent } from '../clear-all/clear-all.component';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css'],
})
export class RecentSearchComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  opendilog(): void {
    const dialogRef = this.dialog.open(ClearAllComponent, {
      // width: '250px',
    });
  }
}
