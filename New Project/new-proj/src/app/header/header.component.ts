import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ServiceService } from '../service.service';
import { DOCUMENT } from '@angular/common';
import { ThisReceiver } from '@angular/compiler';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  serachleft: boolean = true;
  searchright: boolean = false;
  img1: boolean = true;
  img2: boolean = true;
  img3: boolean = true;
  img4: boolean = false;
  showdiv: boolean = false;
  topSearch: any;
  val: any;
  searchcat: any;
  serachcatt: any;
  individualcat: boolean = false;
  search: any;
  serachcatby: any;

  constructor(private loginservice: ServiceService) {}
  @ViewChild('search')
  input!: ElementRef;
  ngOnInit(): void {
    this.topsearch();
    this.topserachCategory();
  }
  topsearch() {
    this.loginservice.topserchSErvice().subscribe((data) => {
      this.topSearch = JSON.parse(data);
      console.log(this.topSearch);
    });
  }
  topserachCategory() {
    this.loginservice.topserchCategoryService().subscribe((data) => {
      this.serachcatt = JSON.parse(data);
      console.log(this.serachcatt);
    });
  }

  searchByCategodry(us: any) {
    console.log('us', us);
    this.val = us;
    this.showdiv = false;
    this.individualcat = true;
    this.loginservice.serachByCategorySErvice(us).subscribe((data) => {
      this.serachcatby = JSON.parse(data);
      console.log(this.serachcatby);
    });
  }

  onsearch() {
    console.log('search');
    this.serachleft = false;
    this.searchright = true;
    this.img1 = false;
    this.img2 = false;
    this.img3 = false;
    this.img4 = true;
    this.showdiv = true;
  }
  
  notshow() {
    this.serachleft = true;
    this.searchright = false;
    this.showdiv = false;
    this.img1 = true;
    this.img2 = true;
    this.img3 = true;
    this.img4 = false;
    this.individualcat = false;
    this.input.nativeElement.value = '';
  }

  // onclickcat(cat: any) {
  //   console.log(cat);
  //   this.val = cat;
  //   this.loginservice.serachByCategory(this.val).subscribe((data) => {
  //     this.searchcat = JSON.parse(data);
  //     console.log(this.searchcat);
  //   });
  //   // let res = document.getElementById('1')?.innerHTML;
  //   // console.log(res);
  // }

  onclickDesignone(useone: any) {
    this.val = useone;
    this.showdiv = false;
    this.individualcat = true;
  }
}
