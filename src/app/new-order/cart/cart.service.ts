import { Injectable } from '@angular/core';
import { ProductItem } from '../new-order/product-item/product-item.model';
import { nanoid } from 'nanoid';
import { ParametersItem } from '../new-order/parameters-item/parameters-item.model';
import { AddonItem } from '../new-order/addon-item/addon-item.model';

export interface ICartService {
  addToCart(product: ProductItem): string;
  updateParameter(parameter: ParametersItem): void;
  addAddon(addon: AddonItem): void;
  deleteAddon(addon: AddonItem): void;
  deleteProduct(id: string): void;
}

@Injectable({
  providedIn: 'root',
})
export class CartService implements ICartService {
  addToCart(product: ProductItem): string {
    const id = nanoid();

    return id;
  }
  updateParameter(parameter: ParametersItem): void {
    throw new Error('Method not implemented.');
  }
  addAddon(addon: AddonItem): void {
    throw new Error('Method not implemented.');
  }
  deleteAddon(addon: AddonItem): void {
    throw new Error('Method not implemented.');
  }
  deleteProduct(id: string): void {
    throw new Error('Method not implemented.');
  }
}
