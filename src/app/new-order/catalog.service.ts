import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddonItem } from './addon-item/addon-item.model';
import { CategoryItem } from './category-item/category-item.model';
import {
  ParametersItem,
  ParametersSection,
} from './parameters-item/parameters-item.model';
import { ProductItem } from './product-item/product-item.model';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  getCategories(): Observable<CategoryItem[]> {
    return of(categories);
  }

  getProducts(category: string): Observable<ProductItem[]> {
    return of(products).pipe(
      map((ps) => ps.filter((p) => p.category === category))
    );
  }

  getParameters(product: string): Observable<ParametersSection[]> {
    return of(parametersSection).pipe(
      map((ps) => ps.filter((p) => p.product === product))
    );
  }

  getAddons(product: string): Observable<AddonItem[]> {
    return of(addons).pipe(
      map((ps) => ps.filter((p) => p.product === product))
    );
  }
}

const categories: CategoryItem[] = [
  new CategoryItem('Coffee'),
  new CategoryItem('Dessert'),
  new CategoryItem('Tea'),
  new CategoryItem('Snacks'),
];

const products: ProductItem[] = [
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

const parametersSection: ParametersSection[] = [
  new ParametersSection('Size', 'Latte', [
    new ParametersItem('Medium', 0),
    new ParametersItem('Large', 1),
  ]),
  new ParametersSection('Size', 'Espresso', [
    new ParametersItem('Small', 0),
    new ParametersItem('Medium', 1),
  ]),
  new ParametersSection('Size', 'Americano', [
    new ParametersItem('Small', 0),
    new ParametersItem('Medium', 1),
  ]),
  new ParametersSection('Size', 'Mocha', [
    new ParametersItem('Small', 0),
    new ParametersItem('Medium', 1),
    new ParametersItem('Large', 2),
  ]),
  new ParametersSection('Size', 'Black', [
    new ParametersItem('Small', 0),
    new ParametersItem('Medium', 1),
  ]),
  new ParametersSection('Size', 'Green', [
    new ParametersItem('Small', 0),
    new ParametersItem('Medium', 1),
  ]),
  new ParametersSection('Size', 'Fruit', [
    new ParametersItem('Small', 0),
    new ParametersItem('Medium', 1),
  ]),

  new ParametersSection('Milk', 'Latte', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Lactose free', 0),
    new ParametersItem('Coconut', 2.5),
  ]),
  new ParametersSection('Milk', 'Mocha', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Lactose free', 0),
    new ParametersItem('Coconut', 2.5),
  ]),

  new ParametersSection('Roasting', 'Latte', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Strong', 1),
    new ParametersItem('Light', 1.5),
  ]),
  new ParametersSection('Roasting', 'Espresso', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Strong', 1),
    new ParametersItem('Light', 1.5),
  ]),
  new ParametersSection('Roasting', 'Americano', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Strong', 1),
    new ParametersItem('Light', 1.5),
  ]),
  new ParametersSection('Roasting', 'Mocha', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Strong', 1),
    new ParametersItem('Light', 1.5),
  ]),

  new ParametersSection('Temperature', 'Black', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Very hot', 0),
    new ParametersItem('Cool', 2),
  ]),
  new ParametersSection('Temperature', 'Green', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Very hot', 0),
    new ParametersItem('Cool', 2),
  ]),
  new ParametersSection('Temperature', 'Fruit', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Very hot', 0),
    new ParametersItem('Cool', 2),
  ]),

  new ParametersSection('Size', 'Ice cream', [
    new ParametersItem('1 ball', 0),
    new ParametersItem('2 balls', 1),
    new ParametersItem('3 balls', 1.5),
  ]),

  new ParametersSection('Topping', 'Cake', [
    new ParametersItem('Cherry', 0),
    new ParametersItem('Chocolate', 0),
    new ParametersItem('Banana', 0),
  ]),
  new ParametersSection('Topping', 'Macaron', [
    new ParametersItem('Lemon', 0),
    new ParametersItem('Berry', 0),
    new ParametersItem('Vanilla', 0),
  ]),
];

const addons: AddonItem[] = [
  new AddonItem('Chocolate chips', 0.5, 'Latte'),
  new AddonItem('Chocolate chips', 0.5, 'Mocha'),
  new AddonItem('Chocolate chips', 0.5, 'Ice cream'),
  new AddonItem('Chocolate chips', 0.5, 'Cake'),

  new AddonItem('Sugar', 0.2, 'Black'),
  new AddonItem('Sugar', 0.2, 'Green'),
  new AddonItem('Sugar', 0.2, 'Fruit'),

  new AddonItem('Cinnamon', 0.5, 'Latte'),
  new AddonItem('Cinnamon', 0.5, 'Espresso'),
  new AddonItem('Cinnamon', 0.5, 'Americano'),
  new AddonItem('Cinnamon', 0.5, 'Mocha'),
];
