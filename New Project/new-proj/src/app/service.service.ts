import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}
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

  topHeaderService() {
    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get(environment.url + 'getBanner', {
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
      
        'courseId': sessionStorage.getItem('courseid')
      
    };
    console.log('body',body);

    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'getCourse/overview', body, {
      headers: headers_object,
    });
  }
}
