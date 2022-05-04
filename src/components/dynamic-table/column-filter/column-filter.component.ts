import { Component, Input } from '@angular/core'

import { DynamicTableColumnModel, DynamicTableModelFiltered, FilterModelCombobox } from '../dynamic-table.model'

@Component({
  selector: 'app-column-filter',
  templateUrl: './column-filter.component.html',
  styleUrls: ['./column-filter.component.scss']
})
export class ColumnFilterComponent {

  @Input() column: DynamicTableColumnModel<any> = {} as any

  constructor() { }

  filterOptions = () => (this.column as FilterModelCombobox).options

  isFilterCombobox = () => (this.column as DynamicTableModelFiltered).filter === 'combobox'

  filterType = (): any => (this.column as DynamicTableModelFiltered).filter
}
