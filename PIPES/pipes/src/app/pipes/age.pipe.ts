import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    // console.log(value)
    let currentYear:any=new Date().getFullYear();
    // console.log(currentYear)//2022 for each value
    let userBirthYear:any=new Date(value).getFullYear()
    // console.log(userBirthYear);//1989 ,1985,1991,1987
    let userAge = currentYear - userBirthYear
    
    return userAge;
  }

}
