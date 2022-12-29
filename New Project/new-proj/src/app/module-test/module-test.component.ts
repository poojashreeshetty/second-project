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
  selctedOptions: any;
  index: any = 0;
  totquest: any;
  ifcircle: boolean = true;
  tikcircle: boolean = false;

  questionToshow: any;
  optionToShow: any;
  isButtonDisabled: boolean = false;
  isDisabledBackBtn: boolean = false;
  myAnswer: any;
  answerArray: any = [];

  display: any;
  public timerInterval: any;

  constructor(private loginservice: ServiceService, private md: MatDialog) { }

  ngOnInit(): void {
    this.loginservice.gotosecondService().subscribe((data) => {
      console.log('quizzz', data);
      this.totquest = data;
      this.questins = data;
      this.options = this.questins.options;
      this.selctedOptions = JSON.parse(JSON.stringify(this.options));
      this.questins = this.questins.questions;
      console.log("questions", this.questins);
      console.log("options", this.options);
      this.questionToshow = this.questins[this.index];
      console.log(this.questionToshow);
      this.optionToShow = this.options[this.index];
      console.log(this.optionToShow);


    });
    this.start()
  }

  next() {
    if (this.questins.length - 1 > this.index) {
      this.index = ++this.index;
      this.questionToshow = this.questins[this.index];
      this.optionToShow = this.options[this.index];
      console.log("inside", this.index)
    }
    if (this.questins.length - 1 == this.index) {
      this.isButtonDisabled = true;
    }
    console.log(this.index);
    console.log(this.selctedOptions[this.index] = null);
    console.log("answerArray", this.selctedOptions)
  }

  prev() {
    this.index = --this.index;
    this.questionToshow = this.questins[this.index];
    this.optionToShow = this.options[this.index];
    console.log(this.questins.length)
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
    console.log(this.selctedOptions)
  }

  saveAnswer(option: any, index: any) {
    console.log(this.index)
    console.log(this.selctedOptions)
    console.log(this.selctedOptions[this.index]);
    console.log(this.selctedOptions[this.index] = index);
    console.log(this.options[this.index]['selected']=option);
    console.log(this.selctedOptions)
  }

  start() {
    this.timer(1);
  }
  stop() {
    clearInterval(this.timerInterval);
  }

  timer(minute: any) {
    // let minute = 1;
    let seconds: number = minute * 60;
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

      if (seconds == 0) {
        console.log('finished');
        clearInterval(this.timerInterval);
        this.opensubmit()
      }
    }, 1000);
  }
}
