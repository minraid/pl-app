import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'data-table',
  templateUrl: 'data-table.component.html'
})
export class DataTableComponent {
  private searchParams: any;
  @Input() data: any[] = [];
  @Input() columns: any[];
  @Output() select: EventEmitter = new EventEmitter();
  @Output() paramsChange: EventEmitter = new EventEmitter();

  @Input()
  get params() {
    return this.searchParams;
  }

  set params(val) {
    this.searchParams = val;
    this.paramsChange.emit(this.searchParams);
  }

  private datePipe = new DatePipe('en-US');

  constructor() {
  }

  onSelect(item) {
    this.select.emit(item);
  }

  sort(key) {
    if (this.params.sort === key) {
      if (this.params.order === 'ASC') {
        this.params.order = 'DESC';
      } else {
        this.params.sort = null;
        this.params.order = null;
      }
    } else {
      this.params.sort = key;
      this.params.order = 'ASC';
    }
    this.paramsChange.emit(this.params);
  }

  isSortingActive(key, order) {
    return this.params.sort === key && this.params.order === order;
  }

  getValue(item, key, filter) {
    const value = key.split('.').reduce((prev, curr) => prev ? prev[curr] : undefined, item);
    if (filter) {
      if (filter === 'date') {
        return this.datePipe.transform(value, 'dd/MM/y');
      }
    }
    return value;
  }
}
