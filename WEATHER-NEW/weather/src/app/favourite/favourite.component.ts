import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  constructor(public dialog: MatDialog , public router:Router ){}

  ngOnInit(): void {
    this.update();

    console.log(this.getfavlist);

    if (localStorage.getItem('fvtfinalkey')) {
      this.fav = true;
    } else {
      this.fav = false;
    }

    localStorage.setItem('url',JSON.stringify(this.router.url));

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RemoveAllComponent, {
      // width: '250px',
    });
  }

  removeDil(data: any) {
    let favs = JSON.parse(localStorage.getItem('fvtfinalkey') as any);
    let current = favs.find((cur: any) => {
      return cur['name'] == data['name'];
    });
    favs.splice(favs.indexOf(current), 1);
    localStorage.setItem('fvtfinalkey', JSON.stringify(favs));
    this.update();
  }

  update() {
    this.getfavlist = localStorage.getItem('fvtfinalkey');
    this.getfavlist = JSON.parse(this.getfavlist);
  }


  fvtback(data:any){
   this.router.navigate(['home']);
   localStorage.setItem('cityDetails',JSON.stringify(data))
  }
}
