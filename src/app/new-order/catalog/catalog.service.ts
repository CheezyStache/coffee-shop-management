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

  getProduct(name: string): Observable<ProductItem> {
    return of(products).pipe(
      map((ps) => {
        const product = ps.find(
          (p) => p.name.split(' ').join('-').toLowerCase() === name
        );

        if (product == undefined) throw `Product ${name} does not exist`;

        return product;
      })
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
  new ProductItem('Latte', 4.0, 'coffee'),
  new ProductItem('Espresso', 2.5, 'coffee'),
  new ProductItem('Americano', 3.0, 'coffee'),
  new ProductItem('Mocha', 5.0, 'coffee'),
  new ProductItem('Ice cream', 3.5, 'dessert'),
  new ProductItem('Cake', 5.5, 'dessert'),
  new ProductItem('Muffin', 2.0, 'dessert'),
  new ProductItem('Black', 2.0, 'tea'),
  new ProductItem('Green', 2.5, 'tea'),
  new ProductItem('Fruit', 3.5, 'tea'),
  new ProductItem('Sweets', 1.5, 'snacks'),
  new ProductItem('Macaron', 3.5, 'snacks'),
  new ProductItem('Oreo', 2.0, 'snacks'),
];

const parametersSection: ParametersSection[] = [
  new ParametersSection('Size', 'latte', [
    new ParametersItem('Medium', 0),
    new ParametersItem('Large', 1),
  ]),
  new ParametersSection('Size', 'espresso', [
    new ParametersItem('Small', 0),
    new ParametersItem('Medium', 1),
  ]),
  new ParametersSection('Size', 'americano', [
    new ParametersItem('Small', 0),
    new ParametersItem('Medium', 1),
  ]),
  new ParametersSection('Size', 'mocha', [
    new ParametersItem('Small', 0),
    new ParametersItem('Medium', 1),
    new ParametersItem('Large', 2),
  ]),
  new ParametersSection('Size', 'black', [
    new ParametersItem('Small', 0),
    new ParametersItem('Medium', 1),
  ]),
  new ParametersSection('Size', 'green', [
    new ParametersItem('Small', 0),
    new ParametersItem('Medium', 1),
  ]),
  new ParametersSection('Size', 'fruit', [
    new ParametersItem('Small', 0),
    new ParametersItem('Medium', 1),
  ]),

  new ParametersSection('Milk', 'latte', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Lactose free', 0),
    new ParametersItem('Coconut', 2.5),
  ]),
  new ParametersSection('Milk', 'mocha', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Lactose free', 0),
    new ParametersItem('Coconut', 2.5),
  ]),

  new ParametersSection('Roasting', 'latte', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Strong', 1),
    new ParametersItem('Light', 1.5),
  ]),
  new ParametersSection('Roasting', 'espresso', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Strong', 1),
    new ParametersItem('Light', 1.5),
  ]),
  new ParametersSection('Roasting', 'americano', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Strong', 1),
    new ParametersItem('Light', 1.5),
  ]),
  new ParametersSection('Roasting', 'mocha', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Strong', 1),
    new ParametersItem('Light', 1.5),
  ]),

  new ParametersSection('Temperature', 'black', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Very hot', 0),
    new ParametersItem('Cool', 2),
  ]),
  new ParametersSection('Temperature', 'green', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Very hot', 0),
    new ParametersItem('Cool', 2),
  ]),
  new ParametersSection('Temperature', 'fruit', [
    new ParametersItem('Standard', 0),
    new ParametersItem('Very hot', 0),
    new ParametersItem('Cool', 2),
  ]),

  new ParametersSection('Size', 'ice-cream', [
    new ParametersItem('1 ball', 0),
    new ParametersItem('2 balls', 1),
    new ParametersItem('3 balls', 1.5),
  ]),

  new ParametersSection('Topping', 'cake', [
    new ParametersItem('Cherry', 0),
    new ParametersItem('Chocolate', 0),
    new ParametersItem('Banana', 0),
  ]),
  new ParametersSection('Topping', 'macaron', [
    new ParametersItem('Lemon', 0),
    new ParametersItem('Berry', 0),
    new ParametersItem('Vanilla', 0),
  ]),
];

const addons: AddonItem[] = [
  new AddonItem('Chocolate chips', 0.5, 'latte'),
  new AddonItem('Chocolate chips', 0.5, 'mocha'),
  new AddonItem('Chocolate chips', 0.5, 'ice cream'),
  new AddonItem('Chocolate chips', 0.5, 'cake'),

  new AddonItem('Sugar', 0.2, 'black'),
  new AddonItem('Sugar', 0.2, 'green'),
  new AddonItem('Sugar', 0.2, 'fruit'),

  new AddonItem('Cinnamon', 0.5, 'latte'),
  new AddonItem('Cinnamon', 0.5, 'espresso'),
  new AddonItem('Cinnamon', 0.5, 'americano'),
  new AddonItem('Cinnamon', 0.5, 'mocha'),
];
