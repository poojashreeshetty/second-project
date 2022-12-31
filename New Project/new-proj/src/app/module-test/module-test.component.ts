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
  coun=1;

  constructor(private loginservice: ServiceService, private md: MatDialog) {}

  ngOnInit(): void {
    this.loginservice.gotosecondService().subscribe((data) => {
      console.log('quizzz', data);
      this.totquest = data;
      // console.log("totquestii",this.totquest);

      this.questins = data;
      this.options = this.questins.options;
      // this.selctedOptions = JSON.parse(JSON.stringify(this.options));
      this.questins = this.questins.questions;
      // console.log("asdrawer",this.questins);

      console.log('questions', this.questins);
      console.log('options', this.options);
      this.questionToshow = this.questins[this.index];
      console.log(this.questionToshow);
      this.optionToShow = this.options[this.index];
      console.log(this.optionToShow);
      this.start();
    });
  }

  next() {
    if (this.questins.length - 1 > this.index) {
      this.index = ++this.index;
      this.questionToshow = this.questins[this.index];
      this.optionToShow = this.options[this.index];
      // console.log('inside', this.index);
      this.coun++
      this.rowClicked=-1;
      this.clicked = false;
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
    this.rowClicked=-1
    this.clicked = false;
    
  }
  onclickcircle() {
    this.tikcircle = true;
    this.ifcircle = false;
  }
  opensubmit() {
    this.stop();

    const dialogRef = this.md.open(SubmitDilogComponent,{
      width: '948px',
      height: '312px'
    });
    console.log(this.selctedOptions);
    sessionStorage.setItem('store',JSON.stringify(this.selctedOptions))
  }

  saveAnswer(option: any, index: any) {
    console.log(option);

    this.selctedOptions[this.index] = index;
    // this.selctedOptions = new Array(this.index.totalQuestions).fill(null);
  }

  start() {
    this.timer(this.totquest?.totalTimeAlloted);
  }
  stop() {
    clearInterval(this.timerInterval);
  }

  timer(minute: any) {
    console.log('min', minute);

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
    console.log(this.clicked);
  }
}
