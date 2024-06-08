import { Component } from '@angular/core';
import { ProductsListComponent } from '../../components/products-list/products-list.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    ProductsListComponent
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

}
