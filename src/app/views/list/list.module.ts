import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ComponentsModule } from '../../../components/components.module'
import { ListRoutingModule } from './list-routing.module'
import { ListComponent } from './list.component'

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ListRoutingModule
  ],
  declarations: [ListComponent]
})
export class ListModule { }
