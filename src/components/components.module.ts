import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ButtonComponent } from './button/button.component'
import { CardComponent } from './card/card.component'
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component'
import { FilterComponent } from './filter/filter.component'
import { InputComponent } from './input/input.component'
import { TableModule } from './table/table.module'

@NgModule({
  imports: [
    CommonModule,
    TableModule,
    FormsModule
  ],
  declarations: [
    CardComponent,
    FilterComponent,
    InputComponent,
    ButtonComponent,
    DynamicTableComponent
  ],
  exports: [
    CardComponent,
    TableModule,
    FilterComponent,
    InputComponent,
    ButtonComponent,
    DynamicTableComponent
  ]
})
export class ComponentsModule { }
