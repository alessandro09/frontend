import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { ComponentsModule } from '../../../components/components.module'
import { DashboardRoutingModule } from './dashboard-routing.module'
import { DashboardComponent } from './dashboard.component'
import { ListExtremesComponent } from './list-extremes/list-extremes.component'
import { ListMovieWinnersByYearComponent } from './list-movies-winners-by-year/list-movie-winners-by-year.component'
import { ListTopThreeStudiosComponent } from './list-top-three-studios/list-top-three-studios.component'
import { ListWinnersByYearComponent } from './list-winners-by-year/list-winners-by-year.component'

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    ListWinnersByYearComponent,
    ListExtremesComponent,
    ListMovieWinnersByYearComponent,
    ListTopThreeStudiosComponent
  ]
})
export class DashboardModule { }
