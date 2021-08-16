import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogService } from '../../catalog/catalog.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: Observable<Category[]> = new Observable();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalog: CatalogService
  ) {}

  ngOnInit(): void {
    this.categories = this.catalog.getCategories();
  }

  onCategoryClick(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
