/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListMovieWinnersByYearComponent } from './list-movie-winners-by-year.component'

describe('ListMovieWinnersByYearComponent', () => {
  let component: ListMovieWinnersByYearComponent;
  let fixture: ComponentFixture<ListMovieWinnersByYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMovieWinnersByYearComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMovieWinnersByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
