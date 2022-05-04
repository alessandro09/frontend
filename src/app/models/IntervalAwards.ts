export interface Award {
  producer: string

  interval: number

  previousWin: number

  followingWin: number
}

export interface IntervalAwards {
  min: Award[]

  max: Award[]
}
