import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { NG_VALUE_ACCESSOR } from '@angular/forms'
import { times } from 'lodash'

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: PaginatorComponent
    }
  ]
})
export class PaginatorComponent implements AfterViewInit, OnChanges {

  @Input() totalPages = 1

  @Input() qtdButtons = 5

  currentPage = 1;

  onChange = (_: number) => {};

  onTouched = () => {};

  touched = false;

  disabled = false;

  buttons: { page: number, action: () => void }[] = []

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.generateButtons()
  }

  ngAfterViewInit() : void {
    this.generateButtons()
  }

  handleFirst() {
    this.changePage(1)
  }

  private get selfCurrentPage() {
    return this.currentPage || 1
  }

  handlePrevious() {
    if (this.selfCurrentPage > 1) this.changePage(this.selfCurrentPage - 1)
  }

  handleLast() {
    this.changePage(this.totalPages)
  }

  handleNext() {
    if (this.selfCurrentPage < this.totalPages) this.changePage(this.selfCurrentPage + 1)
  }
  
  writeValue(value: any): void {
    this.currentPage = value
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

  changePage(currentPage: number) {
    this.currentPage = currentPage
    this.generateButtons()
    this.onChange(this.selfCurrentPage)
  }

  private generateButtons() {
    const qtdButtons = this.totalPages > this.qtdButtons ? this.qtdButtons : this.totalPages

    let buttonsBefore = Math.floor(qtdButtons / 2)

    if (this.selfCurrentPage <= buttonsBefore) buttonsBefore = (this.selfCurrentPage - 1 + buttonsBefore) - buttonsBefore

    let start = this.selfCurrentPage - buttonsBefore

    if (start + qtdButtons > this.totalPages) start = this.totalPages - qtdButtons + 1

    this.buttons = times(qtdButtons).map((it, index) => {
      const page = start  + index

      return {
        page,
        action: () => this.changePage(page)
      }
    })
  }
}
