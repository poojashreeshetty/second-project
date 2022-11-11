import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClearAllDilogueComponent } from '../clear-all-dilogue/clear-all-dilogue.component';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {
  date: any;
  recentSearched: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.date = new Date();
    this.getRecentSearch()
  }

  openDialog(): void {
    this.dialog.open(ClearAllDilogueComponent, {
      width: '450px',

    });
  }

  getRecentSearch() {
    let recent = JSON.parse(localStorage.getItem('recentlySerached') || null)
    console.log(recent)
    if (recent) {
      this.recentSearched = [...new Map(recent.map((m) => [m.id, m])).values()];
      console.log(this.recentSearched)
      localStorage.setItem('recentlySerached', JSON.stringify(this.recentSearched));
    }
  }
}
