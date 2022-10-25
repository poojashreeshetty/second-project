import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
  //  let username = value.split('').reverse().join('');
  // //  console.log(username);
   
  //   return username ;
 let username = value.split('').reverse().join('');
  //  console.log(username);
   
    return username ;

  }

}
