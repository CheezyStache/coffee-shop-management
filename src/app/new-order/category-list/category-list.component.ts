import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryItem } from '../category-item/category-item.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categories: CategoryItem[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.categories = [
      new CategoryItem('Coffee'),
      new CategoryItem('Dessert'),
      new CategoryItem('Tea'),
      new CategoryItem('Snacks'),
    ];
  }

  onCategoryClick(name: string): void {
    this.router.navigate(['../' + name.toLowerCase()], {
      relativeTo: this.route,
    });
  }
}
