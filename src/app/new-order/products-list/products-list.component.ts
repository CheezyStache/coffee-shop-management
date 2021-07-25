import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductItem } from '../product-item/product-item.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: ProductItem[];
  filteredProducts: ProductItem[];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.products = [
      new ProductItem('Latte', 4.0, 'Coffee'),
      new ProductItem('Espresso', 2.5, 'Coffee'),
      new ProductItem('Americano', 3.0, 'Coffee'),
      new ProductItem('Mocha', 5.0, 'Coffee'),
      new ProductItem('Ice cream', 3.5, 'Dessert'),
      new ProductItem('Cake', 5.5, 'Dessert'),
      new ProductItem('Muffin', 2.0, 'Dessert'),
      new ProductItem('Black', 2.0, 'Tea'),
      new ProductItem('Green', 2.5, 'Tea'),
      new ProductItem('Fruit', 3.5, 'Tea'),
      new ProductItem('Sweets', 1.5, 'Snacks'),
      new ProductItem('Macaron', 3.5, 'Snacks'),
      new ProductItem('Oreo', 2.0, 'Snacks'),
    ];

    this.filteredProducts = [];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.filteredProducts = this.products.filter(
        (p) => p.category.toLowerCase() === params['categoryName']
      );
    });
  }

  onProductClick(name: string): void {
    this.router.navigate(['./' + name.toLowerCase()], {
      relativeTo: this.route,
    });
  }
}
