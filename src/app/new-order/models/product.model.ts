import { Addon } from './addon.model';
import { Parameter } from './parameter.model';

export class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public parameters: Parameter[],
    public addons: Addon[]
  ) {}
}
