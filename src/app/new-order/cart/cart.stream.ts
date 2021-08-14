import { Observable, Subject } from 'rxjs';
import { CartItem } from './cart-item/cart-item.model';
import { scan } from 'rxjs/operators';

export class CartStream {
  private cartItems: Observable<CartItem[]>;

  create: Subject<CartItem> = new Subject<CartItem>();
  updates: Subject<CartItem> = new Subject<CartItem>();
  delete: Subject<CartItem> = new Subject<CartItem>();

  constructor() {
    this.cartItems = this.updates.pipe(map(findAndUpdate));
  }
}

function findAndUpdate(cartItem: CartItem, cartItems: CartItem[]): CartItem[] {
  const oldItemIndex = cartItems.findIndex((c) => c.id === cartItem.id);

  if (oldItemIndex === -1) return [...cartItems, cartItem];

  return cartItems.splice(oldItemIndex, 0, cartItem);
}
