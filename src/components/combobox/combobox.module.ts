import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ComboboxComponent } from './combobox.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ComboboxComponent,
  ],
  exports: [
    ComboboxComponent
  ]
})
export class ComboboxModule { }
