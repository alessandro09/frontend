import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ComboboxModule } from '../combobox/combobox.module'
import { FilterModule } from '../filter/filter.module'
import { InputModule } from '../input/input.module'
import { PaginatorModule } from '../paginator/paginator.module'
import { TableModule } from '../table/table.module'
import { DynamicTableComponent } from './dynamic-table.component'

@NgModule({
  imports: [
    CommonModule,
    InputModule,
    ComboboxModule,
    PaginatorModule,
    TableModule,
    FilterModule,
    FormsModule
  ],
  declarations: [
    DynamicTableComponent
  ],
  exports: [
    DynamicTableComponent
  ]
})
export class DynamicTableModule { }
