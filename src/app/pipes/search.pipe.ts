import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products: Product[], name: string): Product[] {
    return products.filter(pr => pr.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
  }

}
