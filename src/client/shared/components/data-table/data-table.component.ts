import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'data-table',
  templateUrl: 'data-table.component.html'
})
export class DataTableComponent {
  @Input() data: any[] = [];
  @Input() columns: any[];
  @Output() select = new EventEmitter();

  constructor() {
  }

  onSelect(item) {
    this.select.emit(item);
  }

  getValue(item, key) {
    return key.split('.').reduce((prev, curr) => prev ? prev[curr] : undefined, item);
  }
}
