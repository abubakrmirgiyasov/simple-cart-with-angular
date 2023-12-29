import {Injectable, OnInit} from '@angular/core';
import { Product } from "../../app/products";

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    const singleItem = this
        .items
        .filter(item => item.id === product.id)
        .at(0);

    if (singleItem !== undefined) {
      singleItem.price += product.price;
    } else {
      this.items.push(product);
    }
  }

  getItems() {
    return this.items;
  }

  removeItem(product: Product): void {
    this.items = this.items.filter(item => item.id !== product.id);
  }

  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

}
