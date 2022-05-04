import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { TemplateComponent } from '../templates/template/template.component'

const menus = [
  { description: 'Dashboard', path: '/app/dashboard' },
  { description: 'List', path: '/app/list' }
]

const dashboardComponent = () => import('./views/dashboard/dashboard.component').then(m => m.DashboardComponent)
const listComponent = () => import('./views/list/list.component').then(m => m.ListComponent)

const routes: Routes = [
  { path: '', redirectTo: '/app/dashboard', pathMatch: 'full' },
  { path: 'app', component: TemplateComponent, data: { menus }, children: [
    { path: 'dashboard', loadChildren: dashboardComponent },
    { path: 'list', loadChildren: listComponent }
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
