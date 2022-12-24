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
      "choice":"seeAll"
    };
    let token = sessionStorage.getItem('token');

    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.post(environment.url + 'getCategories', body,{
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

  // searchByCategory

  // topHeaderService() {
  //   let token = sessionStorage.getItem('token');
  //   var headers_object = new HttpHeaders().set(
  //     'Authorization',
  //     'Bearer ' + token
  //   );
  //   return this.http.get(
  //     environment.url + 'user/home/course/pagination?pageNumber=1&pageLimit=3',
  //     { headers: headers_object, responseType: 'text' }
  //   );
  // }

  // ongoingcourseService() {
  //   let token = sessionStorage.getItem('token');
  //   var headers_object = new HttpHeaders().set(
  //     'Authorization',
  //     'Bearer ' + token
  //   );

  //   return this.http.get(environment.url + 'user/ongoingCourses', {
  //     headers: headers_object,
  //     responseType: 'text',
  //   });
  // }

  // courseOverViewService(dataID: any) {
  //   let token = sessionStorage.getItem('token');
  //   var headers_object = new HttpHeaders().set(
  //     'Authorization',
  //     'Bearer ' + token
  //   );
  //   const parms = new HttpParams().set('courseId', dataID);
  //   return this.http.get(environment.url + 'user/courseOverView', {
  //     headers: headers_object,
  //     responseType: 'text',
  //     params: parms,
  //   });
  //   // return this.http.get(environment.url + 'Lorem/Search?longitude= ' + lat + '&latitude=' + lang +'&brandId=' + brandId +'&restaurantOrFoodType=' + type +'&descRating'+rate)
  // }
}
