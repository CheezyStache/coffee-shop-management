import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParametersSection } from './parameters-item.model';

@Component({
  selector: 'app-parameters-item',
  templateUrl: './parameters-item.component.html',
  styleUrls: ['./parameters-item.component.css'],
})
export class ParametersItemComponent {
  @Input() parametersSection: ParametersSection;
  @Output() onParameterClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.parametersSection = new ParametersSection('id', 'Name', []);
  }

  onClick(id: string): void {
    this.onParameterClick.emit(id);
  }
}
