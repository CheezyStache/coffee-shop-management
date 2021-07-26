import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParametersSection } from './parameters-item.model';

@Component({
  selector: 'app-parameters-item',
  templateUrl: './parameters-item.component.html',
  styleUrls: ['./parameters-item.component.css'],
})
export class ParametersItemComponent {
  @Input() parametersSection: ParametersSection;
  @Input() chosenItem: string;
  @Output() onParameterClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.parametersSection = new ParametersSection('Section', 'Product', []);
    this.chosenItem = 'Item';
  }

  onClick(name: string): void {
    this.onParameterClick.emit(name);
  }
}
