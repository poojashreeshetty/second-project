import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-list-question-dailogue',
  templateUrl: './list-question-dailogue.component.html',
  styleUrls: ['./list-question-dailogue.component.css']
})
export class ListQuestionDailogueComponent implements OnInit {

  resultdata: any;
  index: any;
  isRightAnswer: boolean = false;
  rightAnswer: any;
  wrongAnswer: any;
  userSelectedAnswer: any;
  showWrongAnswer: boolean = false;
  myarray: any = [];

  constructor(private loginservice: ServiceService) { }

  ngOnInit(): void {
    this.getResultData();

  }

  getResultData() {
    this.loginservice.getlistOfQuestion().subscribe((res) => {
      this.resultdata = res;
      console.log("resultData", this.resultdata);

      for (let i = 0; i < this.resultdata?.questions.length; i++) {

        let a = {
          questinName: this.resultdata.questions[i],
          options: this.resultdata.options[i],
          // selected:this.resultdata.selectedAndActualAnswerSet[i],
          selectedAndActualAnswerSet: {
            userSelected: this.resultdata.selectedAndActualAnswerSet[i][0],
            rightAnswer: this.resultdata.selectedAndActualAnswerSet[i][1]
          }
        }
        this.myarray.push(a)
      }
      console.log(this.myarray)
    })
  }


  showQustionAndOptions(i: any) {
    console.log('questname', this.resultdata.questions[i])
    console.log('options', this.resultdata.options[i]);
    let selected = this.resultdata.selectedAndActualAnswerSet[i];
    let right = this.resultdata.selectedAndActualAnswerSet[i][i];
    // alert(right)
    console.log(selected)
    if (selected[0] && selected[0] == selected[1]) {
      console.log('You are answer is right')
      console.log('right answer is ', selected[0]);
      this.rightAnswer = selected[0]
      this.userSelectedAnswer = selected[0];
      console.log('userSelected', this.userSelectedAnswer)
      this.isRightAnswer = true;
    }
    else {
      console.log('You are answer is wrong')
      console.log('selected answer', selected[0]);
      this.userSelectedAnswer = selected[0];
      console.log('userSelected', this.userSelectedAnswer)
      console.log('right answer', selected[1]);
      this.rightAnswer = selected[1];

      this.isRightAnswer = false;
    }
    this.showError()
  }

  showError() {
    // alert(this.userSelectedAnswer)
    // alert(this.rightAnswer)
    if (this.userSelectedAnswer != this.rightAnswer) {
      this.showWrongAnswer = true
    } else {
      this.showWrongAnswer = false
    }
  }


}
