import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ButtonModule } from './button/button.module'
import { CardModule } from './card/card.module'
import { ComboboxModule } from './combobox/combobox.module'
import { DynamicTableModule } from './dynamic-table/dynamic-table.module'
import { FilterModule } from './filter/filter.module'
import { InputModule } from './input/input.module'
import { PaginatorModule } from './paginator/paginator.module'
import { TableModule } from './table/table.module'

@NgModule({
  imports: [
    TableModule,
    FormsModule,
    DynamicTableModule,
    CardModule,
    FilterModule,
    InputModule,
    ButtonModule,
    PaginatorModule,
    ComboboxModule
  ],
  exports: [
    TableModule,
    DynamicTableModule,
    CardModule,
    FilterModule,
    InputModule,
    ButtonModule,
    PaginatorModule,
    ComboboxModule
  ]
})
export class ComponentsModule { }
