import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface login extends Array<login[]> {
  id: number;

  userName: string;

  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class PolicyServiceService {
  constructor(private http: HttpClient) {}

  getInfo(): Observable<login[]> {
    return this.http.get<login[]>('http://localhost:3000/login');
  }

  updateInfo(data: any) {
    const body = {
      userName: 'poojashetty',
      password: data,
      id: 1,
    };
    return this.http.put('http://localhost:3000/login/1',body);
  }
}
