import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from '../components/components.module'
import { TemplateModule } from '../templates/template/template.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ApiService } from './services/api.service'
import { DashboardModule } from './views/dashboard/dashboard.module'
import { ListModule } from './views/list/list.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TemplateModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    DashboardModule,
    ListModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
