import { Component } from '@angular/core';
import { CategoryItem } from '../category-item/category-item.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categories: CategoryItem[];

  constructor() {
    this.categories = [
      new CategoryItem('Coffee'),
      new CategoryItem('Dessert'),
      new CategoryItem('Tea'),
      new CategoryItem('Snacks'),
    ];
  }

  onCategoryClick(name: string): void {
    console.log(name);
  }
}
