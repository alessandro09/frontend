import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { IntervalAwards } from '../models/IntervalAwards'
import { Movie, PaginatedMovies } from '../models/Movie'
import { MovieFilters } from '../models/MovieFilters'
import { StudiosWrapper } from '../models/Studios'
import { WinnerByYearWrapper } from '../models/WinnerByYear'
import { prepareQueryParams } from './prepareQueryParams'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly configUrl = 'https://tools.texoit.com/backend-java/api/movies'

  constructor(
    private http: HttpClient
  ) { }

  private get = <T> (params?: any) => this.http.get<T>(`${this.configUrl}${prepareQueryParams(params)}`)

  getIntervalAwards = () => this.get<IntervalAwards>({ projection: 'max-min-win-interval-for-producers' })

  getPaginatedMovies = (params: MovieFilters) => this.get<PaginatedMovies>(params)

  getWinningStudios = () => this.get<StudiosWrapper>({ projection: 'studios-with-win-count' })

  getWinnerByYear = (year: string) => this.get<Movie[]>({ winner: true, year })

  getYearsWithMultipleWinners = () => this.get<WinnerByYearWrapper>({ projection: 'years-with-multiple-winners' })
}
