import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.css'],
})
export class CourseOverviewComponent implements OnInit {
  active = 'active';
  active1 = 'no-active';
  part2Chap = false;
  part2Over = true;
  part1video = true;
  expand = false;
  removePlus = true;
  removeminus = false;
  act = 'act';
  act1 = 'no-act';
  demo1 = true;
  getCourseId: any;
  user: any;
  vedio: any;
  showMore: boolean = true;
  showless: boolean = false;
  userChapter: any;
  toFixed: any;
  finalfixed: any;
  finalfixedtwo: any;
  chapterarray: any = [];
  chapterlength: any;
  finalfixedtop: any;
  finalfixedtwotop: any;
  lessonUrl: any;
  currenttime: any;
  storenumber: any;
  currentindex = 0;
  constructor(private loginservice: ServiceService, private router: Router) {}

  ngOnInit(): void {
    // this.getCourseId = sessionStorage.getItem('courseid');
    this.courseOverView();
    this.courseChapters();
    this.courseOverViewall() 
    this.loginservice.getvedio().subscribe((data)=>{
      console.log("gett",data);
      
    })
  }
  over() {
    this.act = 'act';
    this.act1 = 'no-act';
    this.part2Over = true;
    this.part2Chap = false;
    this.part1video = true;
  }
  chap() {
    this.act = 'no-act';
    this.act1 = 'act';
    this.part2Over = false;
    this.part2Chap = true;
    this.part1video = false;
  }
  plus(index: any) {
    this.expand = true;
    this.removePlus = false;
    this.removeminus = true;

    this.chapterarray[index] = !this.chapterarray;
  }

  minus(index: any) {
    this.expand = false;
    this.removePlus = true;
    this.removeminus = false;

    this.chapterarray[index] = this.chapterarray;
  }
  mblOver() {
    this.act = 'act';
    this.act1 = 'no-act';
  }
  mblChap() {
    this.act = 'no-act';
    this.act1 = 'act';
  }

  courseOverView() {
    this.loginservice.courseOverViewService().subscribe((data: any) => {
      console.log('overview', data);
      this.user = data;
      this.vedio =
        this.user.courseOverview.overViewId.previewThisCourse?.videoLink;
    });
  }
  courseOverViewall() {
    this.loginservice.courseOverViewServiceall().subscribe((data: any) => {
      console.log('overviewwwww', data);
      this.user = data;
      this.vedio =
        this.user.courseOverview.overViewId.previewThisCourse?.videoLink;
    });
  }

  courseChapters() {
    this.loginservice.courseChaptersService().subscribe((data: any) => {
      console.log('chapters', data);
      this.userChapter = data;

      this.chapterlength =
        this.userChapter.listOfChapters.totalChapters[0].chapters.length;

      for (var i = 0; i < this.chapterlength; i++) {
        this.chapterarray.push('false');
      }
    });
  }

  clickShowMore() {
    this.showless = true;
    this.showMore = false;
  }
  clickShowLess() {
    this.showless = false;
    this.showMore = true;
  }

  lessonDuration(tofixed: any) {
    this.finalfixed = tofixed / 60;
    this.finalfixedtwo = parseFloat(this.finalfixed).toFixed(2);
  }
  lessonDurationtop(tofixedtop: any) {
    this.finalfixedtop = tofixedtop;
    this.finalfixedtwotop = parseFloat(this.finalfixedtop).toFixed(1);
  }

  onclickvcplay(lessonurl: any, i: any, x: any) {
    console.log('inde', i);
    console.log('dd', x);

    this.vedio = lessonurl;
    console.log(this.vedio);
    this.storenumber = sessionStorage.setItem(
      'serialid',
      this.userChapter.listOfChapters.totalChapters[0].chapters[i].lessons[x]
        .serialNumberOfLesson
    );
    console.log(this.storenumber);
  }

  fetchData(e: any) {
    console.log('hi');

    console.log(e);
  }
  playPause() {
    var myVideo: any = document.getElementById('my_video_1');
    console.log(myVideo.currentTime);
    this.currenttime = myVideo.currentTime;
    //   this.loginservice.UpdateProgressServise(this.currenttime).subscribe((data: any) => {
    //     console.log('chapters', data);
    //     this.userChapter = data;
    //   // if (myVideo.paused) myVideo.play();
    //   // else myVideo.pause();
    // })
  }

  vedioend(id:any) {
    console.log('jgvh');
    sessionStorage.setItem('truee','true')
    this.loginservice
      .UpdateProgressServise(id,sessionStorage.getItem('serialid'))
      .subscribe((data: any) => {
        console.log('chapters', data);
        // this.userChapter = data;
        // if (myVideo.paused) myVideo.play();
        // else myVideo.pause();
      });
  }
  gotoQuiz(courseid:any,testid:any){
    console.log("courseid",courseid);
    console.log("tesid",testid); 
    sessionStorage.setItem('testid',testid)
    this.router.navigate(['/test'])
  }
}
