import { Component } from '@angular/core';
import { ProductsListComponent } from '../../components/products-list/products-list.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    ProductsListComponent,
    SearchBoxComponent
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

  searchStr: string = ""

  searchChanged(str: string) {
    this.searchStr = str
    console.log(this.searchStr);
    
  }

}

//23хв : 12сек
