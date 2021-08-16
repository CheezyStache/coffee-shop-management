import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogService } from '../../catalog/catalog.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: Observable<Product[]> = new Observable();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalog: CatalogService
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.params;

    this.products = this.catalog.getProducts(params['categoryId']);
  }

  onProductClick(id: string): void {
    this.router.navigate(['../', 'parameters', id], { relativeTo: this.route });
  }
}
