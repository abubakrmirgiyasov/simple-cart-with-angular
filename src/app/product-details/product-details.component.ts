import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Product, products } from "../products";
import {CartService} from "../services/cart/cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit {
  product : Product | undefined;

  constructor(
      private route: ActivatedRoute,
      private cartService: CartService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIfIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(product => product.id === productIfIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
