export class Parameter {
  constructor(
    public id: string,
    public name: string,
    public items: ParameterItem[]
  ) {}
}

export class ParameterItem {
  constructor(
    public id: string,
    public name: string,
    public price: number,
    public isDefault?: boolean
  ) {}
}
