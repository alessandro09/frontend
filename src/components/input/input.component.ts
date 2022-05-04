import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() type?: 'input' | 'number'

  @ViewChild('input') ref?: ElementRef;

  value: string = ""

  onChange = (_: string) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  constructor() { }

  get nativeElement() {
    return this.ref?.nativeElement
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled
  }

  updateChanges() {
    this.onChange(this.value)
  }
}
