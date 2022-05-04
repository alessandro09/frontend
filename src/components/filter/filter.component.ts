import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { NG_VALUE_ACCESSOR } from '@angular/forms'
import { fromEvent } from 'rxjs'
import { debounceTime, distinctUntilChanged, filter, tap } from 'rxjs/operators'

import { InputComponent } from '../input/input.component'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: FilterComponent
    }
  ]
})
export class FilterComponent implements AfterViewInit {

  @Input() type: 'input' | 'number' | 'combobox' = 'input'

  @Input() options: { description?: string, value: string }[] = []

  @Input() mode: 'button' | 'debounce' = 'button'

  @Input() debounceTime = 300

  @Output() onConfirm = new EventEmitter<string>()

  @ViewChild('field') inputRef?: InputComponent;

  filter: string = ""

  onChange = (_: string) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  constructor() { }
  
  ngAfterViewInit(): void {
    if (this.mode === 'debounce') this.initDebounce()
  }

  writeValue(value: any): void {
    this.filter = value
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
    if (this.mode === 'button') this.onChange(this.filter)
  }

  handleConfirm() {
    this.onConfirm.emit(this.filter)
  }

  private initDebounce() {
    console.log(this.inputRef?.nativeElement);
    

    if (!this.inputRef?.nativeElement) return
    
    fromEvent(this.inputRef?.nativeElement, this.type === 'combobox' ? 'change' : 'keyup')
            .pipe(
                filter(Boolean),
                debounceTime(this.debounceTime),
                distinctUntilChanged(),
                tap(({ target: { value } }: any) => {
                  this.filter = value
                  this.onChange(this.filter)
                })
            )
            .subscribe();
  }
}
