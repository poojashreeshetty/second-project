import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ResultDilogueComponent } from '../result-dilogue/result-dilogue.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  resultdata: any;
  correcttt: any;
  worng: any;
 

  constructor(private loginservice: ServiceService, private md: MatDialog) {}

  ngOnInit(): void {
    this.loginservice.getresultService().subscribe((data) => {
      console.log(data);
      this.resultdata = data;
      sessionStorage.setItem('resultdata', JSON.stringify(this.resultdata))
    });
  }
  opendilogueresult(i:any) {
    console.log("czx",i);
    // sessionStorage.setItem('index')
    
    const open = new MatDialogConfig();
    open.position = {
      right: '0%',
      top: '0%',
    };
    open.panelClass = 'open';
    this.md.open(ResultDilogueComponent, open).afterClosed();
  }
  correct(correctanswer: any) {
    // console.log('cc', correctanswer);
    if (correctanswer[0] == correctanswer[1]) {
      this.correcttt=true;
      this.worng=false
    }
    else{
      this.correcttt=false;
      this.worng=true
    }
  }
}
