import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

const CALENDAR_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CalendarComponent),
  multi: true
};

@Component({
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  providers: [CALENDAR_VALUE_ACCESSOR]
})
export class CalendarComponent implements OnInit, ControlValueAccessor {
  private month: Date[][];
  private date: Date;

  onChange = (_: any) => {
  };
  onTouch = () => {
  };
  private innerModel: Date;
  private open: boolean;

  set model(value: Date) {
    if (this.isValidDate(value)) {
      this.innerModel = new Date(value);
    }
  }

  get model() {
    return this.innerModel;
  }

  constructor() {
  }

  ngOnInit() {
    this.generateMonth();
    this.model = new Date();
  }

  select(date) {
    if (date) {
      this.onTouch();
      this.writeValue(date);
      this.onChange(date);

      this.open = false;
    }
  }

  previous() {
    const date = new Date(this.date);
    date.setMonth(date.getMonth() - 1);
    this.generateMonth(date)
  }

  next() {
    const date = new Date(this.date);
    date.setMonth(date.getMonth() + 1);
    this.generateMonth(date)
  }

  private generateMonth(date?) {
    const {day, end} = this.setInitialValues(date);

    let week = [];

    while (day < end) {
      if (day.getDay() !== week.length) {
        week.push(null)
      } else {
        week.push(new Date(day));
        day.setDate(day.getDate() + 1);
      }
      if (week.length === 7) {
        this.month.push(week);
        week = [];
      }
    }

    if (week.length) {
      while (week.length < 7) {
        week.push(null);
      }
      this.month.push(week);
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  writeValue(value: Date) {
    this.model = value;
  }

  private isValidDate(value) {
    const date = new Date(value);
    return !isNaN(date.getDate());
  }

  private setInitialValues(date?) {
    this.month = [];
    this.date = date ? new Date(date) : new Date();
    const day: Date = new Date(this.date);
    day.setDate(1);
    const end = new Date(day);
    end.setMonth(end.getMonth() + 1);
    return {day, end};
  }

}
