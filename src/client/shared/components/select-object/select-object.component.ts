import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

export const CUSTOM_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectObjectComponent),
  multi: true
};

@Component({
  selector: 'select-object',
  templateUrl: 'select-object.component.html',
  providers: [CUSTOM_CONTROL_VALUE_ACCESSOR]
})
export class SelectObjectComponent implements ControlValueAccessor {
  @Input() placeholder: string;
  @Input() show: string;
  @Input() options: any[];
  private innerValue: any;
  private onChangeCallback: any;
  private onTouchedCallback: any;

  constructor() {
  }

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
