import { Component, OnInit } from '@angular/core';
import { CartService } from "../../services/cart/cart.service";
import { Product } from "../products";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {

  items: Product[] = [];

  checkoutForm =  this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
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

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
