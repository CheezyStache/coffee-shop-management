import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { ProductItem } from '../product-item/product-item.model';
import { UrlGeneratorService } from '../url-generator.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [UrlGeneratorService],
})
export class ProductsListComponent implements OnInit {
  products: ProductItem[] = [];

  constructor(
    private urlGenerator: UrlGeneratorService,
    private route: ActivatedRoute,
    private catalog: CatalogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.catalog
        .getProducts(params['categoryName'])
        .subscribe((products) => (this.products = products));
    });
  }

  onProductClick(name: string): void {
    this.urlGenerator.navigateToCatalogUrl('../product', name);
  }
}
