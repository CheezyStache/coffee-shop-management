export class Parameter {
  constructor(
    public id: string,
    public name: string,
    public items: ParamterItem[]
  ) {}
}

export class ParamterItem {
  constructor(public id: string, public name: string, public price: number) {}
}
