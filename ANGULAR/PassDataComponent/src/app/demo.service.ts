import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DemoService {
  public subject = new Subject();
  // public subject = new BehaviorSubject<any>('pooja');
  constructor() {}

  saveData(data: any) {
    this.subject.next(data);
  }

  getData(){
   return this.subject.asObservable();
  }

  saveDemo1(dataa:any){
    this.subject.next(dataa);
  }
  getDemo1(){
    return this.subject.asObservable();
  }
}
