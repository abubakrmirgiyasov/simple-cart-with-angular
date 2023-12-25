import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart/cart.service";
import {Product} from "../products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {

  items: Product[] = [];

  constructor(
      private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, current) => sum + current.price, 0);
  }

  removeItemFromCart(product: Product): void {
    this.cartService.removeItem(product);
    this.ngOnInit();
  }

}
