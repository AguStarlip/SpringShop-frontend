import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const api_url = environment.url;

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string, type: 'users'|'products'): string {

    if(!image){
      return `${api_url}/uploads/${type}/Image-not-available.jpg`;
    }else if(image.includes('https')){
      return image;
    }else if(image){
      return `${api_url}/uploads/${type}/${image}`;
    }else{
      return `${api_url}/uploads/${type}/Image-not-available.jpg`;
    }

  }

}
