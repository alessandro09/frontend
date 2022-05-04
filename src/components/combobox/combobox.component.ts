import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import { NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: ComboboxComponent
    }
  ]
})
export class ComboboxComponent {

  @Input() options?: { description?: string, value: any }[]

  @ViewChild('checkbox') ref?: ElementRef;

  value?: string

  onChange = (_?: string) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  constructor() { }

  get nativeElement() {
    console.log(this.ref);
    
    return this.ref?.nativeElement
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(onChange?: any): void {
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
