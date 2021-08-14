export class CartItem {
  constructor(
    public id: string,
    public name: string,
    public amount: number,
    public price: number,
    public children?: CartItem[]
  ) {}
}
