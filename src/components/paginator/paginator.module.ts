import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ButtonModule } from '../button/button.module'
import { PaginatorComponent } from './paginator.component'

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [
    PaginatorComponent
  ],
  exports: [
    PaginatorComponent
  ]
})
export class PaginatorModule { }
