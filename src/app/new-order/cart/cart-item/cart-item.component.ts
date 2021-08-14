import { Component, Input } from '@angular/core';
import { CartItem } from './cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() cartItem: CartItem;

  constructor() {
    this.cartItem = new CartItem('', '', 0, 0);
  }
}
