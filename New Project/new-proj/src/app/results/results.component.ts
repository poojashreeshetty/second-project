import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ListQuestionDailogueComponent } from '../list-question-dailogue/list-question-dailogue.component';
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
  question: any;
  notAnswer: any;

  constructor(private loginservice: ServiceService, private md: MatDialog) { }

  ngOnInit(): void {
    this.loginservice.getresultService().subscribe((data) => {
      console.log(data);
      this.resultdata = data;
      // this.loginservice.saveResultData().next
      this.loginservice.saveResultData(data)
      // sessionStorage.setItem('resultdata', JSON.stringify(this.resultdata))
    });
  }


  opendilogueresult(i: any) {
    this.loginservice.saveResultIndex(i)
    console.log("czx", i);
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
      this.correcttt = true;
      this.worng = false;
      this.notAnswer = false;

    } if (correctanswer[0] == null) {
      this.notAnswer = true;
      this.correcttt = false;
      this.worng = false
    }
    if (correctanswer[0] != null && correctanswer[0] != correctanswer[1]) {
      this.correcttt = false;
      this.worng = true;
      this.notAnswer = false;
    }
  }

  demo() {
    console.log(this.resultdata);
    const open = new MatDialogConfig();
    open.position = {
      right: '0%',
      top: '0%',
    };
    open.panelClass = 'open';
    this.loginservice.savelistOfQuestion(this.resultdata)

    this.md.open(ListQuestionDailogueComponent, open).afterClosed();

  }
}
