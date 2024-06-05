import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product("TV", 9000),
    new Product("Printer", 4000),
    new Product("Mobilla", 12000),
    new Product("Mouse", 2000),
  ]

  getProducts(): Product[] {
    return this.products
  }

  constructor() { }
}
