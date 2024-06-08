import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product: Product = new Product("", 0, "")

  constructor (private productService: ProductService) {}

  onDelete(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      //....описати оновлення списку на сторінці.
    })
  }


}
