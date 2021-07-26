import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddonItem } from './addon-item.model';

@Component({
  selector: 'app-addon-item',
  templateUrl: './addon-item.component.html',
  styleUrls: ['./addon-item.component.css'],
})
export class AddonItemComponent {
  @Input() addon: AddonItem;
  @Input() isPicked: boolean;
  @Output() onAddonClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.addon = new AddonItem('Addon', 0, 'Product');
    this.isPicked = false;
  }

  onClick(name: string): void {
    this.onAddonClick.emit(name);
  }
}
