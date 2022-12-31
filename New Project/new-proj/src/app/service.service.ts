import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ThisReceiver } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  body: any;
  
  private resultData = new BehaviorSubject<any>(null);

  private resultIndex = new BehaviorSubject<any>(null)

  constructor(private http: HttpClient) { }

  saveResultData(obj: any) {
    this.resultData.next(obj)
  }

  getResultData() {
    return this.resultData.asObservable()
  }

  saveResultIndex(index: any) {
    this.resultIndex.next(index)
  }

  getResultIndex() {
    return this.resultIndex.asObservable()
  }



  loginfromService(body: any) {
    return this.http.post(environment.url + 'signin', body);
  }

  topserchSErvice() {
    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get(environment.url + 'topSearches', {
      headers: headers_object,
      responseType: 'text',
    });
  }
  topserchCategoryService() {
    const body = {
      choice: 'seeAll',
    };
    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'getCategories', body, {
      headers: headers_object,
      responseType: 'text',
    });
  }

  serachByCategorySErvice(data: any) {
    const body = {
      text: data,
    };

    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'searchByCategory', body, {
      headers: headers_object,
      responseType: 'text',
    });
  }

  serachByTop(use: any) {
    const body = {
      text: use,
    };

    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'searchCourse', body, {
      headers: headers_object,
    });
  }

  getNameService() {
    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get(environment.url + 'getName', {
      headers: headers_object,
      responseType: 'text',
    });
  }

  topHeaderService(count: any) {
    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get(environment.url + 'getBanner?page=' + count, {
      headers: headers_object,
      responseType: 'text',
    });
  }

  ongoingcourseService() {
    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );

    return this.http.get(environment.url + 'ongoingCourses', {
      headers: headers_object,
      responseType: 'text',
    });
  }

  ChoiceAllCourseService(body: any) {
    // console.log(body);

    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'choiceYourCourse', body, {
      headers: headers_object,
    });
  }

  courseOverViewService() {
    const body = {
      courseId: sessionStorage.getItem('courseid'),
    };
    console.log('body', body);

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'getCourse/overview', body, {
      headers: headers_object,
    });
  }
  courseOverViewServiceall() {
    const body = {
      courseId: sessionStorage.getItem('courseidall'),
    };
    console.log('bodygggg', body);

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'getCourse/overview', body, {
      headers: headers_object,
    });
  }
  courseChaptersService() {
    const body = {
      view: 'chapters',
      courseId: sessionStorage.getItem('courseid'),
    };
    console.log('body', body);

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'getCourse/chapters', body, {
      headers: headers_object,
    });
  }

  topCoursesInbusService() {
    const body = {
      text: 'Business',
    };
    console.log('body', body);

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'topCoursesInCategory', body, {
      headers: headers_object,
    });
  }
  topCoursesIndesignService() {
    const body = {
      text: 'Design',
    };
    console.log('body', body);

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'topCoursesInCategory', body, {
      headers: headers_object,
    });
  }

  topCoursesInbusServiceSeaall() {
    const body = {
      text: 'Business',
      choice: 'seeAll',
    };
    console.log('body', body);

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'topCoursesInCategory', body, {
      headers: headers_object,
    });
  }

  topCoursesIndesignServiceSeall() {
    const body = {
      text: 'Design',
      choice: 'seeAll',
    };
    console.log('body', body);

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'topCoursesInCategory', body, {
      headers: headers_object,
    });
  }

  //   {
  //     "courseId":"6392c11ff94873e84f66097f",
  //     "videoCompleted":"true",
  //     "pauseTime":"1.00",
  //     "videoSerialNumber":1
  // }
  // updateProgress
  UpdateProgressServise(id: any, serialnumber: any) {
    const body = {
      courseId: id,
      videoCompleted: sessionStorage.getItem('truee'),
      videoSerialNumber: serialnumber,
    };
    console.log('body', body);

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'updateProgress', body, {
      headers: headers_object,
    });
  }
  ongoingcourseServiceseeAll(pop: any) {
    const body = {
      choice: pop,
      view: 'seeAll',
    };
    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );

    return this.http.post(environment.url + 'choiceYourCourse', body, {
      headers: headers_object,
    });
  }

  getvedio() {
    const body = {
      courseId: '638ee5d4860444260090662b',
    };
    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );

    return this.http.post(environment.url + 'getProgress', body, {
      headers: headers_object,
    });
  }

  // gotoquizService(courseid: any, testid: any) {
  //   // this.body = {
  //   //   courseId: courseid,
  //   //   testId: testid,
  //   // };
  // }
  gotosecondService() {
    const body = {
      courseId: sessionStorage.getItem('courseid'),
      testId: sessionStorage.getItem('testid'),
    };

    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );

    return this.http.post(environment.url + 'displayTest', body, {
      headers: headers_object,
    });
  }

  postresultService() {
    const body = {
      courseId: sessionStorage.getItem('courseid'),
      chapterNumber: sessionStorage.getItem('chapternumber'),
      chapterTitle: sessionStorage.getItem('chapteretitle'),
      chapterId: sessionStorage.getItem('chapterid'),
      testId: sessionStorage.getItem('testid'),
      answers: JSON.parse(sessionStorage.getItem('store') as any),
    };
    console.log(body);

    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );

    return this.http.post(environment.url + 'submitTest', body, {
      headers: headers_object,
      responseType: 'text',
    });
  }

  getresultService() {
    const body = {
      testId: sessionStorage.getItem('testid'),
    };
    console.log(body);

    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );

    return this.http.post(
      environment.url + 'getCompletedTestResultData',
      body,
      {
        headers: headers_object,
      }
    );
  }

  // getTestStatus
  // gettestService() {
  //   const body = {
  //     testId: sessionStorage.getItem('testid')
  //   };
  //   let token = sessionStorage.getItem('token');
  //   var headers_object = new HttpHeaders().set(
  //     'Authorization',
  //     'Bearer ' + token
  //   );
  //   return this.http.post(environment.url + 'getTestStatus', body,{
  //     headers: headers_object
  //   });
  // }

  // getteststatus() {
  //   this.loginservice.gettestService().subscribe((data)=>{
  //     console.log("gettestt",data);

  //   })
  // }
}
