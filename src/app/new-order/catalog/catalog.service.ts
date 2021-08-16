import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { Parameter } from '../models/parameter.model';
import { Addon } from '../models/addon.model';
import { filter, find, map, mergeAll, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/assets/catalog.json');
  }

  getProducts(categoryId: string): Observable<Product[]> {
    return this.http.get<Category[]>('/assets/catalog.json').pipe(
      mergeAll(),
      find((c) => c.id === categoryId),
      filter((c) => c != undefined),
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      map((c) => c!.products)
    );
  }

  getParameters(productId: string): Observable<Parameter[]> {
    return this.getProductById(productId).pipe(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      map((p) => p!.parameters)
    );
  }

  getAddons(productId: string): Observable<Addon[]> {
    return this.getProductById(productId).pipe(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      map((p) => p!.addons)
    );
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Category[]>('/assets/catalog.json').pipe(
      mergeAll(),
      mergeMap((c) => c.products),
      find((p) => p.id === productId),
      filter((p) => p != undefined)
    ) as Observable<Product>;
  }
}
