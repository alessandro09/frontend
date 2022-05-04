import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { TemplateComponent } from '../templates/template/template.component'
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { ListComponent } from './views/list/list.component'

const menus = [
  { description: 'Dashboard', path: '/app/dashboard' },
  { description: 'List', path: '/app/list' }
]

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: TemplateComponent, data: { menus }, children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'list', component: ListComponent }
  ] },
  { path: '**', redirectTo: '/app' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
