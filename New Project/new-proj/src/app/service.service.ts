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
    return this.http.put(environment.url + 'login', body, {
      observe: 'response',
    });
  }

  topHeaderService() {
    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    return this.http.get(
      environment.url + 'user/home/course/pagination?pageNumber=1&pageLimit=3',
      { headers: headers_object, responseType: 'text' }
    );
  }

  ongoingcourseService() {
    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );

    return this.http.get(environment.url + 'user/ongoingCourses', {
      headers: headers_object,
      responseType: 'text',
    });
  }

  courseOverViewService(dataID: any) {
    let token = sessionStorage.getItem('token');
    var headers_object = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + token
    );
    const parms = new HttpParams().set('courseId', dataID);
    return this.http.get(environment.url + 'user/courseOverView', {
      headers: headers_object,
      responseType: 'text',
      params: parms,
    });
    // return this.http.get(environment.url + 'Lorem/Search?longitude= ' + lat + '&latitude=' + lang +'&brandId=' + brandId +'&restaurantOrFoodType=' + type +'&descRating'+rate)
  }

  //   serchretrntalloffersService(data:any,id:any){

  //     let params = new HttpParams()

  //     .set('page', 1)

  //     .set('limit', 10)

  //     .set('description', data)

  //     .set("restaurantId",id)

  //     return this.http.get(environment.url + 'Lorem/SearchRestaurantOffer', {

  //       params: params,

  //     });

  //   }
  // }
}
