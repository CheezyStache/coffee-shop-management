export class ParametersItem {
  constructor(public name: string, public price: number) {}
}

export class ParametersSection {
  constructor(
    public name: string,
    public product: string,
    public parameters: ParametersItem[]
  ) {}
}
