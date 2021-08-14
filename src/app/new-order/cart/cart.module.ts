import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartMenuComponent } from './cart-menu/cart-menu.component';

@NgModule({
  declarations: [CartItemComponent, CartMenuComponent],
  imports: [CommonModule],
  exports: [CartMenuComponent],
})
export class CartModule {}
