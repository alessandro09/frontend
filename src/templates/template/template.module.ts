import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { ComponentsModule } from '../../components/components.module'
import { ContentComponent } from './content/content.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { TemplateComponent } from './template.component'
import { ToolbarComponent } from './toolbar/toolbar.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  declarations: [
    TemplateComponent,
    ToolbarComponent,
    SidebarComponent,
    ContentComponent
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
