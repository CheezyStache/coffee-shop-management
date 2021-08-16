import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css'],
})
export class CategoryItemComponent {
  @Input() category: Category;
  @Output() onCategoryClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.category = new Category('id', 'Category name', []);
  }

  onClick(): void {
    this.onCategoryClick.emit(this.category.id);
  }
}
