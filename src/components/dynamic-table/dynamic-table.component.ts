import { Component, Input, OnInit } from '@angular/core'

import { PaginatedResult } from '../../app/models/PaginatedResult'
import { DynamicTableColumnModel, DynamicTableModel, DynamicTableModelFiltered } from './dynamic-table.model'

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

  showFilter(col: any) {
    return !!(col as DynamicTableModelFiltered).filter
  }

  castValue(item: any, { property, castValue }: DynamicTableColumnModel<T>) {
    const vl = item[property]

    return castValue ? castValue(vl) : vl
  }

  constructor() { }

  ngOnInit() { }

}
