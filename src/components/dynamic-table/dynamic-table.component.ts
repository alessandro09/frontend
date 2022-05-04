import { Component, Input, OnInit } from '@angular/core'

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
export class DynamicTableComponent<T> implements OnInit {

  @Input() emptyMessage?: string

  @Input() model: DynamicTableModel<T> = {} as any

  @Input() data?: T[] | PaginatedResult<T> = []

  get items() {
    return this.model.paginated ? (this.data as PaginatedResult<T>).content : this.data as T[]
  }


  filterOptions(col: any) {
    return (col as FilterModelCombobox).options
  }

  showFilter(col: any) {
    return !!this.filterType(col)
  }

  isFilterCombobox(col: any) {
    return this.filterType(col) === 'combobox'
  }

  filterType(col: any): any {
    return (col as DynamicTableModelFiltered).filter
  }

  castValue(item: any, { property, castValue }: DynamicTableColumnModel<T>) {
    const vl = item[property]

    return castValue ? castValue(vl) : vl
  }

  constructor() { }

  ngOnInit() { }

}
