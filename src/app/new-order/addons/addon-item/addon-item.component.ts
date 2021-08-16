import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Addon } from '../../models/addon.model';

@Component({
  selector: 'app-addon-item',
  templateUrl: './addon-item.component.html',
  styleUrls: ['./addon-item.component.css'],
})
export class AddonItemComponent {
  @Input() addon: Addon;
  @Input() isPicked: boolean;
  @Output() onAddonClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.addon = new Addon('id', 'Addon', 0);
    this.isPicked = false;
  }

  onClick(id: string): void {
    this.onAddonClick.emit(id);
  }
}
