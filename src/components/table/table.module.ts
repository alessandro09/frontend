import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { TableComponent } from './table.component'
import { BodyComponent } from './tbody/tbody.component'
import { TdComponent } from './td/td.component'
import { TfootComponent } from './tfoot/tfoot.component'
import { ThComponent } from './th/th.component'
import { HeaderComponent } from './thead/thead.component'
import { TrComponent } from './tr/tr.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableComponent,
    BodyComponent,
    HeaderComponent,
    ThComponent,
    TrComponent,
    TdComponent,
    TfootComponent
  ],
  exports: [
    TableComponent,
    BodyComponent,
    HeaderComponent,
    ThComponent,
    TrComponent,
    TdComponent,
    TfootComponent
  ]
})
export class TableModule { }
