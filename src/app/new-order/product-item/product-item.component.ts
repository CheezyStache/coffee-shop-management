import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItem } from './product-item.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: ProductItem;
  @Output() onProductClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.product = new ProductItem('Product', 0, 'Category');
  }

  onClick(): void {
    this.onProductClick.emit(this.product.name);
  }
}
