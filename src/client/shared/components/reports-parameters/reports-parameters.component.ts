import { Component, forwardRef, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

const REPORTS_PARAMS_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ReportsParametersComponent),
  multi: true
};

@Component({
  selector: 'reports-parameters',
  templateUrl: 'reports-parameters.component.html',
  providers: [REPORTS_PARAMS_VALUE_ACCESSOR]
})
export class ReportsParametersComponent implements AfterContentInit, ControlValueAccessor {
  @Output() generate = new EventEmitter();

  onChange = (_: any) => {
  };
  onTouch = () => {
  };
  private innerModel: any = {};
  private period: string = 'week';

  get model() {
    return this.innerModel;
  }

  set model(val) {
    if (val) {
      Object.assign(this.innerModel, val);
    } else {
      this.innerModel.from = null;
      this.innerModel.to = null;
    }
    this.onChange(this.innerModel);
  }

  constructor() {
  }

  ngAfterContentInit() {
    this.selectPeriod(this.period);
  }

  onCalendarChange() {
    this.period = 'period';
    this.writeValue(this.model);
  }

  onGenerate() {
    this.generate.emit();
  }

  selectPeriod(period) {
    this.period = period;
    const from = new Date();
    const to = new Date();
    switch (period) {
      case 'today': {
        from.setDate(from.getDate() - 1);
        break;
      }
      case 'yesterday': {
        from.setDate(from.getDate() - 2);
        to.setDate(to.getDate() - 1);
        break;
      }
      case 'week': {
        from.setDate(from.getDate() - 7);
        break;
      }
    }
    this.writeValue({from, to});
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  writeValue(val) {
    this.model = val;
  }
}
