import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() onProductClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.product = new Product('id', 'Product', 0, [], []);
  }

  onClick(): void {
    this.onProductClick.emit(this.product.id);
  }
}
