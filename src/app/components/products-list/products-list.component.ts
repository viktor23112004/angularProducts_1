import { Component, Input, OnInit, input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from '../../pipes/search.pipe';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    ProductComponent,
    NgFor,
    HttpClientModule,
    SearchPipe
  ],
  providers: [ProductService],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {

  @Input() searchStr: string = ""

  // searchStr: string = ""

  products: Product[] = []

  constructor (private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data
      }
    })
    console.log(this.products);
    
    
  }

}
