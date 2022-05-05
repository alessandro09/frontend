import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { TemplateComponent } from '../templates/template/template.component'

const menus = [
  { description: 'Dashboard', path: '/app/dashboard' },
  { description: 'List', path: '/app/list' }
]

const dashboardModule = () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
const listModule = () => import('./views/list/list.module').then(m => m.ListModule)

const routes: Routes = [
  { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
  { path: 'app', component: TemplateComponent, data: { menus }, children: [
    { path: 'dashboard', loadChildren: dashboardModule },
    { path: 'list', loadChildren: listModule }
  ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
