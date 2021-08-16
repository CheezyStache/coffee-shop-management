import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../../catalog/catalog.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalog: CatalogService
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;

    this.catalog
      .getProducts()
      .subscribe((products) => (this.products = products));
  }

  onProductClick(id: string): void {
    this.router.navigate(['./', id, 'parameters'], { relativeTo: this.route });
  }
}
