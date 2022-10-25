import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    const[price]=args;
    return value *price;
  }

}
