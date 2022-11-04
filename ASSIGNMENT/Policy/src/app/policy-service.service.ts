import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface login extends Array<login[]> {
  userName: string;
  password: string;
  id: number;

 


}

@Injectable({
  providedIn: 'root',
})
export class PolicyServiceService {
  constructor(private http: HttpClient) {}

  getInfo(): Observable<login[]> {
    return this.http.get<login[]>('http://localhost:3000/login');
  }

  updateInfo(password: any, userName: any, id: number) {
    console.log(id + "from service");
    
    const body = {
      userName: userName,
      password: password,
      id: id,
    };
    return this.http.put('http://localhost:3000/login/' + id, body);
  }

  loginCheck(): Observable<login[]> {
    return this.http.get<login[]>('http://localhost:3000/login');
  }



  //superadmin
  postDetail(data:any){
    return this.http.post<any>("http://localhost:3000/superAdmin/",data);
  }

  getDetail()
  {
    return this.http.get<any>("http://localhost:3000/superAdmin/");
  }



}


// {
//   "posts": [
//     {
//       "id": 1,
//       "title": "json-server",
//       "author": "typicode"
//     }
//   ],
//   "comments": [
//     {
//       "id": 1,
//       "body": "some comment",
//       "postId": 1
//     }
//   ],
//   "profile": {
//     "name": "typicode"
//   }
// }
