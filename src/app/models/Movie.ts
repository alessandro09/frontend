import { PaginatedResult } from './PaginatedResult'

export interface Movie {
  id: number

  year: number

  title: string

  studios: string[]

  producers: string[]

  winner: true
}

export type PaginatedMovies = PaginatedResult<Movie>
