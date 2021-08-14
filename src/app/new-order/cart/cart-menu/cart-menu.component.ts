import { Component } from '@angular/core';
import { CartItem } from '../cart-item/cart-item.model';

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.css'],
})
export class CartMenuComponent {
  cartItems: CartItem[];

  constructor() {
    this.cartItems = [
      new CartItem('id1', 'name1', 1, 1.5, [
        new CartItem('id1', 'name1', 1, 1.5),
      ]),
      new CartItem('id2', 'name2', 2, 3.5, [
        new CartItem('id1', 'name1', 1, 1.5),
        new CartItem('id3', 'name3', 3, 3.5),
      ]),
    ];
  }
}
