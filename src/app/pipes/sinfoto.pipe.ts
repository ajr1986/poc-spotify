import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(images: any[]): any {

    if(images != null && images.length > 0){
      return images[1].url;
    }

    return "assets/img/noimage.png";
  }

}
