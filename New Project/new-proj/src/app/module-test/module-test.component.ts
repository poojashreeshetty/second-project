import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { SubmitDilogComponent } from '../submit-dilog/submit-dilog.component';


@Component({
  selector: 'app-module-test',
  templateUrl: './module-test.component.html',
  styleUrls: ['./module-test.component.css'],
})
export class ModuleTestComponent implements OnInit {
  questins: any;
  options: any;
  i = 0;
  totquest: any;
  ifcircle: boolean = true;
  tikcircle: boolean = false;

  constructor(private loginservice: ServiceService,private md: MatDialog) {}

  ngOnInit(): void {
    this.loginservice.gotosecondService().subscribe((data) => {
      console.log('quizzz', data);
      this.totquest = data;
      this.questins = data;
      this.options = this.questins.options;
      this.questins = this.questins.questions;
      console.log(this.options);
    });
  }

  next() {
    this.i = ++this.i;
  }

  prev() {
    this.i = --this.i;
  }
  onclickcircle() {
    this.tikcircle = true;
    this.ifcircle = false;
  }
  opensubmit() {
    const dialogRef = this.md.open(SubmitDilogComponent, {
      width: '350px',
      height: '200px',
    });
  }
}
