import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ComboboxComponent } from './combobox.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ComboboxComponent,
  ],
  exports: [
    ComboboxComponent
  ]
})
export class ComboboxModule { }
