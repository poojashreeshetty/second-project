import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { SubmitDilogComponent } from '../submit-dilog/submit-dilog.component';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-module-test',
  templateUrl: './module-test.component.html',
  styleUrls: ['./module-test.component.css'],
})
export class ModuleTestComponent implements OnInit {
  questins: any;
  options: any;
  selctedOptions = [null, null, null, null, null];
  index: any = 0;
  totquest: any;
  ifcircle: boolean = true;
  tikcircle: boolean = false;

  questionToshow: any;
  optionToShow: any;
  isButtonDisabled: boolean = false;
  isDisabledBackBtn: boolean = false;
  myAnswer: any;
  // answerArray: any = [];
  rowClicked: any;
  display: any;
  public timerInterval: any;
  chosenIndex: any;
  clicked: boolean = true;
  coun = 1;
  myOptions: any = [];
  finalArray: any = [];
  singleQuestion: any;
  optionRequestForApi: any = [];

  constructor(private loginservice: ServiceService, private md: MatDialog) { }

  ngOnInit(): void {
    this.loginservice.gotosecondService().subscribe((data) => {
      console.log('quizzz', data);
      this.totquest = data;
      this.questins = data;
      this.options = this.questins.options;
      this.questins = this.questins.questions;
      this.questionToshow = this.questins[this.index];
      this.optionToShow = this.options[this.index];
      this.modifyQuestionData();
      this.singleQuestion = this.finalArray[this.index];
      console.log(this.singleQuestion)
      this.start();
    });
  }

  modifyQuestionData() {
    for (let i = 0; i < this.totquest.questions.length; i++) {
      this.myOptions = []
      let question = {
        questionName: this.totquest.questions[i],
        questionNumber: i + 1,
        options: this.modifyOptions(this.totquest.options[i])
      }
      this.finalArray.push(question)
    }
    console.log("final Array", this.finalArray);
  }

  modifyOptions(options: any): any {
    for (let j = 0; j < options.length; j++) {
      let opt =
      {
        value: options[j],
        isSelcted: false,
        index: j
      }
      this.myOptions.push(opt)
    }
    return this.myOptions
  }

  next() {
    if (this.questins.length - 1 > this.index) {
      this.index = ++this.index;
      this.questionToshow = this.questins[this.index];
      this.optionToShow = this.options[this.index];
      this.coun++
    }
    if (this.questins.length - 1 == this.index) {
      this.isButtonDisabled = true;
    }
    // console.log(this.index);
    // console.log((this.selctedOptions[this.index] = null));
    // console.log('answerArray', this.selctedOptions);
  }

  prev() {
    this.index = --this.index;
    this.questionToshow = this.questins[this.index];
    this.optionToShow = this.options[this.index];
    console.log(this.questins.length);
    this.coun--

  }
  onclickcircle() {
    this.tikcircle = true;
    this.ifcircle = false;
  }
  opensubmit() {
    this.stop();

    const dialogRef = this.md.open(SubmitDilogComponent, {
      width: '350px',
      height: '200px',
    });
    console.log(this.selctedOptions);
    sessionStorage.setItem('store', JSON.stringify(this.selctedOptions))
  }

  saveAnswer(option: any, index: any) {
    console.log(option);

    this.selctedOptions[this.index] = index;
    // this.selctedOptions = new Array(this.index.totalQuestions).fill(null);
  }

  start() {
    // this.timer(this.totquest?.totalTimeAlloted);
    this.timer(3000);

  }
  stop() {
    clearInterval(this.timerInterval);
  }

  timer(minute: any) {
    // console.log('min', minute);

    // let minute = 1;
    let seconds: number = minute;
    let textSec: any = '0';
    let statSec: number = 60;

    const prefix = minute < 10 ? '0' : '';

    this.timerInterval = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
      sessionStorage.setItem('sec', this.display);

      if (seconds == 0) {
        console.log('finished');
        clearInterval(this.timerInterval);
        this.opensubmit();
      }
    }, 1000);
  }

  changeTableRowColor(idx: any) {
    if (this.chosenIndex != idx) {
      this.clicked = false;
    }
    if (this.rowClicked === idx) this.rowClicked = -1;
    else this.rowClicked = idx;
    this.chosenIndex = idx;
    this.clicked = !this.clicked;
    if (this.clicked == false) {
      this.chosenIndex = null;
    }
    console.log(this.rowClicked)
    console.log(this.clicked);
  }

  saveAnswer1(opt: any) {
    let options = this.singleQuestion.options;
    options.map((el: any) => {
      if (el.index == opt.index) {
        el.isSelcted = true
        // this.optionRequestForApi.push(opt.index)
      } else {
        el.isSelcted = false;
        // this.optionRequestForApi.push(null)
      }
    })
    console.log(options);
    console.log(this.finalArray)
  }

  prev1() {
    console.log(this.index)
    this.index = this.index - 1;
    this.singleQuestion = this.finalArray[this.index];
    console.log(this.singleQuestion)
    console.log(this.finalArray)
  }

  next1() {
    console.log(this.index)
    this.index = this.index + 1;
    this.singleQuestion = this.finalArray[this.index];
    console.log(this.singleQuestion)
    console.log(this.finalArray)

  }

  opensubmit1() {
    console.log(this.finalArray)
    for (let i = 0; i < this.finalArray.length; i++) {
      console.log(this.finalArray[i].questionName)
      for (let j = 0; j < this.finalArray[i].options.length; j++) {
        let a = this.finalArray[i].options.filter((el: any) => el.isSelcted == true)
        console.log('a', a);
        if (a.length > 0) {
          if (this.finalArray[i].options[j].isSelcted == true) {
            this.optionRequestForApi.push(this.finalArray[i].options[j].index);
          }
        } else {
          this.optionRequestForApi.push(null);
          break
        }
        console.log(this.finalArray[i].options[j])
      }
    }
    this.stop();
    const dialogRef = this.md.open(SubmitDilogComponent, {
      width: '350px',
      height: '200px',
    });
    console.log(this.selctedOptions);
    sessionStorage.setItem('store', JSON.stringify(this.optionRequestForApi))
    console.log(this.optionRequestForApi)
  }


}
