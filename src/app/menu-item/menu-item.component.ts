import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent {
  @Input() route: string;
  @Input() name: string;
  @Input() description: string;

  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.route = '';
    this.name = '';
    this.description = '';
  }

  onMenuClick(): void {
    this.onClick.emit(this.route);
  }
}
