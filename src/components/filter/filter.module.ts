import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { ButtonModule } from '../button/button.module'
import { InputModule } from '../input/input.module'
import { FilterComponent } from './filter.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InputModule,
    ButtonModule
  ],
  declarations: [
    FilterComponent
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule { }
