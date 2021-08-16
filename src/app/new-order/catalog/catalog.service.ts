import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { Parameter } from '../models/parameter.model';
import { Addon } from '../models/addon.model';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('/assets/catalog.json');
  }

  getProducts(): Observable<Product[]> {
    throw new Error();
  }

  getParameters(): Observable<Parameter[]> {
    throw new Error();
  }

  getAddons(): Observable<Addon[]> {
    throw new Error();
  }
}
