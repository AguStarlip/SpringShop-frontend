import { NgModule } from '@angular/core';
import { ImagePipe } from './image.pipe';
import { CurrencyFormatPipe } from './currency-format.pipe';



@NgModule({
  declarations: [
    ImagePipe, 
    CurrencyFormatPipe],
  exports: [
    ImagePipe,
    CurrencyFormatPipe
  ]
})
export class PipesModule { }
