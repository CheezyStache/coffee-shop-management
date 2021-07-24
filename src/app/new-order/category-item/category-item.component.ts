import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryItem } from './category-item.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css'],
})
export class CategoryItemComponent {
  @Input() category: CategoryItem;
  @Output() onCategoryClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.category = new CategoryItem('Category name');
  }

  onClick(): void {
    this.onCategoryClick.emit(this.category.name);
  }
}
