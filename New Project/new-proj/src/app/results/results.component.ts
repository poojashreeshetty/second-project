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
  question: any;
  myarray:any=[];

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
    // console.log(i)
    // console.log(this.resultdata)
    // console.log('questname', this.resultdata.questions[i])
    // console.log('options', this.resultdata.options[i]);
    // let selected = this.resultdata.selectedAndActualAnswerSet[i];
    // let right = this.resultdata.selectedAndActualAnswerSet[i][i];
    // if (selected[0] && selected[0] == selected[1]) {
    //   console.log('You are answer is right')
    //   console.log('right answer is ',selected[0])
    // } else {
    //   console.log('You are answer is wrong')
    //   console.log('selected answer',selected[0])
    //   console.log('right answer',selected[1])
    // }




    console.log("czx",i);
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
      this.worng = false
    }
    else {
      this.correcttt = false;
      this.worng = true
    }
  }

  demo(){
    console.log(this.resultdata);

    for(let i=0;i<this.resultdata?.questions.length;i++){

      let a = {
        questinName:this.resultdata.questions[i],
        options:this.resultdata.options[i],
        // selected:this.resultdata.selectedAndActualAnswerSet[i],
        selectedAndActualAnswerSet : {
          userSelected:this.resultdata.selectedAndActualAnswerSet[i][0],
          rightAnswer:this.resultdata.selectedAndActualAnswerSet[i][1]
        }
      }
      this.myarray.push(a)
    }
   
    console.log(this.myarray)
  }
}
