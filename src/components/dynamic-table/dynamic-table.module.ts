import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ComboboxModule } from '../combobox/combobox.module'
import { InputModule } from '../input/input.module'
import { PaginatorModule } from '../paginator/paginator.module'
import { TableModule } from '../table/table.module'
import { ColumnFilterComponent } from './column-filter/column-filter.component'
import { DynamicTableComponent } from './dynamic-table.component'

@NgModule({
  imports: [
    CommonModule,
    InputModule,
    ComboboxModule,
    PaginatorModule,
    TableModule
  ],
  declarations: [
    DynamicTableComponent,
    ColumnFilterComponent
  ],
  exports: [
    DynamicTableComponent
  ]
})
export class DynamicTableModule { }
