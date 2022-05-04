import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { DynamicTableModel } from 'src/components/dynamic-table/dynamic-table.model'

import { Movie } from '../../models/Movie'
import { PaginatedResult } from '../../models/PaginatedResult'
import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  private subscriptionApi?: Subscription

  model: DynamicTableModel<Movie> = {
    paginated: true,
    onFilter: (filters: any) => this.handleSearch(filters),
    columns: [
      { property: 'id', title: 'Id', headerAlign: 'center' },
      { property: 'year', title: 'Year', headerAlign: 'center', filter: 'input' },
      { property: 'title', title: 'Title', headerAlign: 'center' },
      {
        property: 'winner',
        title: 'Winner',
        headerAlign: 'center',
        filter: 'combobox',
        options: [
          { description: 'Yes/No', value: undefined },
          { description: 'Yes', value: true },
          { description: 'No', value: false }
        ],
        castValue: (vl) => vl ? 'Yes' : 'No'
      }
    ]
  }

  data?: PaginatedResult<Movie>

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.handleSearch()
  }

  ngOnDestroy() {
    this.subscriptionApi?.unsubscribe()
  }

  handleSearch(filters?: any) {
    if (filters?.winner === 'undefined') delete filters?.winner

    this.subscriptionApi = this.apiService
      .getPaginatedMovies({ page: 0, size: 15, ...filters })
      .subscribe(it => {
        this.data = it
        this.subscriptionApi?.unsubscribe()
      })
  }
}
