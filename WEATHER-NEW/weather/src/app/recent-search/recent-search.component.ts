import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClearAllComponent } from '../clear-all/clear-all.component';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css'],
})
export class RecentSearchComponent implements OnInit {
  getfinaldetils: any;
  fav:any;
  constructor(public dialog: MatDialog,public router:Router) {}

  ngOnInit(): void {
    this.getfinaldetils= (localStorage.getItem('recentfinalkey'));
    this.getfinaldetils=JSON.parse( this.getfinaldetils)

    if(localStorage.getItem('recentfinalkey')){
      this.fav=true
    }
    else{
      this.fav=false;
    }

    localStorage.setItem('url',JSON.stringify(this.router.url));

  }

  opendilog(): void {
    const dialogRef = this.dialog.open(ClearAllComponent, {
      // width: '250px',
    });
  }

  recentback(data:any){
    this.router.navigate(['home']);
    localStorage.setItem('cityDetails',JSON.stringify(data))
  }
}
