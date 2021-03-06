import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { DynamicTableModel } from 'src/components/dynamic-table/dynamic-table.model'

import { Award, IntervalAwards } from '../../../models/IntervalAwards'
import { ApiService } from '../../../services/api.service'

@Component({
  selector: 'app-list-extremes',
  templateUrl: './list-extremes.component.html',
  styleUrls: ['./list-extremes.component.scss']
})
export class ListExtremesComponent implements OnInit, OnDestroy {

  private subscriptionApi?: Subscription

  model: DynamicTableModel<Award> = {
    columns: [
      { property: 'producer', title: 'Producer' },
      { property: 'interval', title: 'Interval' },
      { property: 'previousWin', title: 'Previous Year' },
      { property: 'followingWin', title: 'Following Year' }
    ]
  }

  data?: IntervalAwards;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.subscriptionApi = this.apiService
      .getIntervalAwards()
      .subscribe(it => this.data = it)
  }

  ngOnDestroy() {
    this.subscriptionApi?.unsubscribe()
  }
}
