import {
  Parameter,
  ParameterItem as ParameterItemData,
} from '../../models/parameter.model';

export class ParameterItem extends ParameterItemData {
  public isChosen?: boolean;
}

export class ParametersSection extends Parameter {
  constructor(
    public id: string,
    public name: string,
    public items: ParameterItem[]
  ) {
    super(id, name, items);
  }
}
