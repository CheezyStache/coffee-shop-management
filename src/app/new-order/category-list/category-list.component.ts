import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { CategoryItem } from '../category-item/category-item.model';
import { UrlGeneratorService } from '../url-generator.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  providers: [UrlGeneratorService],
})
export class CategoryListComponent implements OnInit {
  categories: CategoryItem[] = [];

  constructor(
    private urlGenerator: UrlGeneratorService,
    private catalog: CatalogService
  ) {}

  ngOnInit(): void {
    this.catalog
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }

  onCategoryClick(name: string): void {
    this.urlGenerator.navigateToCatalogUrl('./', name);
  }
}
