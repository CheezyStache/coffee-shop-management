import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Parameter } from '../../models/parameter.model';

@Component({
  selector: 'app-parameters-item',
  templateUrl: './parameters-item.component.html',
  styleUrls: ['./parameters-item.component.css'],
})
export class ParametersItemComponent {
  @Input() parametersSection: Parameter;
  @Input() chosenItemId: string;
  @Output() onParameterClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.parametersSection = new Parameter('id', 'Name', []);
    this.chosenItemId = 'id';
  }

  onClick(id: string): void {
    this.onParameterClick.emit(id);
  }
}
