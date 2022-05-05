/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable } from 'rxjs'
import { Movie } from 'src/app/models/Movie'
import { ApiService } from 'src/app/services/api.service'

import { DynamicTableModel } from '../../../../components/dynamic-table/dynamic-table.model'
import { ListMovieWinnersByYearComponent } from './list-movie-winners-by-year.component'

describe('ListMovieWinnersByYearComponent', () => {
  let component: ListMovieWinnersByYearComponent;
  let fixture: ComponentFixture<ListMovieWinnersByYearComponent>;

  const mockedData: Movie[] = []

  const getWinnerByYear = new Observable(sub => {
    sub.next(mockedData)
  })

  const mockApi = jasmine.createSpyObj('ApiService', ['getWinnerByYear'])

  mockApi.getWinnerByYear.and.returnValue(getWinnerByYear)

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMovieWinnersByYearComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: ApiService, useValue: mockApi } ]
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

  it('should render app-card only', () => {
    const el = fixture.nativeElement as HTMLElement

    expect(el.childNodes.length).toBe(1)

    const [ appCard ] = Array.from(el.childNodes)

    expect(appCard.nodeName).toBe('APP-CARD')
    expect((appCard as any).getAttribute('title')).toBe('List movie winners by year')
  });

  it('should render children to app-card', () => {
    const el = fixture.nativeElement as HTMLElement
    const [ appCard ] = Array.from(el.childNodes)
    
    expect(appCard.childNodes.length).toBe(2)

    const [ filter, table ] = Array.from(appCard.childNodes)

    expect(filter.nodeName).toBe('APP-FILTER')

    expect(table.nodeName).toBe('APP-DYNAMIC-TABLE')
    expect((table as any).getAttribute('emptyMessage')).toBe('Filter to load')
  });

  it('should instantiate model', () => {
    const expectModel: DynamicTableModel<Movie> = {
      columns: [
        { property: 'id', title: 'Id' },
        { property: 'year', title: 'Year' },
        { property: 'title', title: 'Title' }
      ]
    }

    expect(fixture.componentInstance.model).toEqual(expectModel)
  })

  it('should load data calling api', () => {
    fixture.componentInstance.handleSearch('2022')
    
    expect(fixture.componentInstance.data).toBe(mockedData)

    expect(mockApi.getWinnerByYear).toHaveBeenCalledWith('2022')
  })
});
