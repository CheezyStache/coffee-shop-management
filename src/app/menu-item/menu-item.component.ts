import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
  @Input() id: string;
  @Input() name: string;
  @Input() description: string;

  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.id = '';
    this.name = '';
    this.description = '';
  }

  onMenuClick(): void {
    this.onClick.emit(this.id);
  }
}
