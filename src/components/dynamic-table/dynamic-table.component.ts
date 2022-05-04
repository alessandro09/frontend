import { Component, EventEmitter, Input, Output } from '@angular/core'

import { PaginatedResult } from '../../app/models/PaginatedResult'
import {
  DynamicTableColumnModel,
  DynamicTableModel,
  DynamicTableModelFiltered,
  FilterModelCombobox,
} from './dynamic-table.model'

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent<T> {

  filter: any = { }

  @Output() onChange = new EventEmitter()

  @Input() emptyMessage?: string

  @Input() model: DynamicTableModel<T> = {} as any

  @Input() data?: T[] | PaginatedResult<T> = []

  get items() {
    return this.model.paginated ? (this.data as PaginatedResult<T>)?.content : this.data as T[]
  }

  getColFilterProperty = (col: any) => {
    const {filterProperty, property} = (col as DynamicTableModelFiltered<T>)

    return filterProperty || property
  }

  getFilter = (col: any) => (col as DynamicTableModelFiltered<T>).filter

  getFilterOptions = (col: any) => (col as FilterModelCombobox<T>).options

  castValue(item: any, { property, castValue }: DynamicTableColumnModel<T>) {
    const vl = item[property]

    return castValue ? castValue(vl) : vl
  }

  constructor() { }

  get totalPages() {
    return (this.data as PaginatedResult<T>)?.totalPages
  }

  get currentPage() {
    return (this.data as PaginatedResult<T>)?.number + 1
  }

  onChangeFilter(page: any) {
    this.filter = { ...this.filter, page: page - 1 }

    this.reload()
  }

  reload() {
    this.onChange?.emit(this.filter)
  }

  reloadFilter() {
    this.filter.page = 0
    this.reload()
  }
}
