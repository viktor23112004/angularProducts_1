import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    ProductComponent,
    NgFor
  ],
  providers: [ProductService],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {

  products: Product[] = []

  constructor (private productServise: ProductService) {}

  ngOnInit(): void {
    this.products = this.productServise.getProducts()
    console.log(this.products)
    
  }

}
