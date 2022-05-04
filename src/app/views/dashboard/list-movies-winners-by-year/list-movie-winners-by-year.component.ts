import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { DynamicTableModel } from 'src/components/dynamic-table/dynamic-table.model'

import { ApiService } from '../../../services/api.service'

@Component({
  selector: 'app-list-movie-winners-by-year',
  templateUrl: './list-movie-winners-by-year.component.html',
  styleUrls: ['./list-movie-winners-by-year.component.scss']
})
export class ListMovieWinnersByYearComponent implements OnInit {

  private subscriptionApi?: Subscription

  data: any

  columns: DynamicTableModel[] = [
    { property: 'id', title: 'Id' },
    { property: 'year', title: 'Year' },
    { property: 'title', title: 'Title' }
  ]

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscriptionApi?.unsubscribe()
  }

  handleSearch(year: string) {
    this.subscriptionApi = this.apiService
      .getWinnerByYear(year)
      .subscribe(it => {
        this.data = it
        this.subscriptionApi?.unsubscribe()
      })
  }
}
