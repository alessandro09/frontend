import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { WinnerByYear } from 'src/app/models/WinnerByYear'

import { DynamicTableModel } from '../../../../components/dynamic-table/dynamic-table.model'
import { ApiService } from '../../../services/api.service'

@Component({
  selector: 'app-list-winners-by-year',
  templateUrl: './list-winners-by-year.component.html',
  styleUrls: ['./list-winners-by-year.component.scss']
})
export class ListWinnersByYearComponent implements OnInit, OnDestroy {

  private subscriptionApi?: Subscription

  data?: WinnerByYear[]

  model: DynamicTableModel<WinnerByYear> = {
    columns: [
      { property: 'year', title: 'Year' },
      { property: 'winnerCount', title: 'Win Count' }
    ]
  }

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.subscriptionApi = this.apiService
      .getYearsWithMultipleWinners()
      .subscribe(it => this.data = it?.years)
  }

  ngOnDestroy() {
    this.subscriptionApi?.unsubscribe()
  }
}
