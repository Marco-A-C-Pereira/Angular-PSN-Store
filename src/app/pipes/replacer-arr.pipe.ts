import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacerArr'
})
export class ReplacerArrPipe implements PipeTransform {

  transform(value: string[], S1:string): string {
    let arrStr = value.join();
    arrStr = arrStr.replace(/,/g, S1);
    console.log('Valor das tags');
    console.log(arrStr);
    return arrStr;
  }

}
