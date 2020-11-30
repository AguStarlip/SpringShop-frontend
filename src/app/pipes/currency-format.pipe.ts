import { ReturnStatement } from '@angular/compiler';
import { Pipe } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe {
  
  transform(value: any): any {

    return Math.round(parseFloat(value) * 0.01);
   
  }
}
