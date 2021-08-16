export class Parameter {
  constructor(
    public id: string,
    public name: string,
    public items: ParamterItem[]
  ) {}
}

export class ParamterItem {
  public isChosen?: boolean;

  constructor(
    public id: string,
    public name: string,
    public price: number,
    public isDefault?: boolean
  ) {}
}
