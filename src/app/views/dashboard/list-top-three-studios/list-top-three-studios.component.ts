import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { DynamicTableModel } from 'src/components/dynamic-table/dynamic-table.model'

import { Studio } from '../../../models/Studios'
import { ApiService } from '../../../services/api.service'

@Component({
  selector: 'app-list-top-three-studios',
  templateUrl: './list-top-three-studios.component.html',
  styleUrls: ['./list-top-three-studios.component.scss']
})
export class ListTopThreeStudiosComponent implements OnInit {

  private subscriptionApi?: Subscription

  data?: Studio[]

  columns: DynamicTableModel[] = [
    { property: 'name', title: 'Name' },
    { property: 'winCount', title: 'Win Count' }
  ]

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.subscriptionApi = this.apiService
      .getWinningStudios()
      .subscribe(it => this.data = it?.studios.slice(0, 3))
  }

  ngOnDestroy() {
    this.subscriptionApi?.unsubscribe()
  }
}
