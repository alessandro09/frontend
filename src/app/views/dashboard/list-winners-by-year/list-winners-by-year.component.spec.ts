/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable } from 'rxjs'
import { WinnerByYear } from 'src/app/models/WinnerByYear'
import { ApiService } from 'src/app/services/api.service'

import { DynamicTableModel } from '../../../../components/dynamic-table/dynamic-table.model'
import { ListWinnersByYearComponent } from './list-winners-by-year.component'

describe('ListWinnersByYearComponent', () => {
  let component: ListWinnersByYearComponent;
  let fixture: ComponentFixture<ListWinnersByYearComponent>;

  const mockedData = { years: [] }

  const getYearsWithMultipleWinners = new Observable(sub => {
    sub.next(mockedData)
  })

  const mockApi = jasmine.createSpyObj('ApiService', ['getYearsWithMultipleWinners'])

  mockApi.getYearsWithMultipleWinners.and.returnValue(getYearsWithMultipleWinners)

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWinnersByYearComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: ApiService, useValue: mockApi } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWinnersByYearComponent);
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
    expect((appCard as any).getAttribute('title')).toBe('List years with multiple winners')
  });

  it('should render children to app-card', () => {
    const el = fixture.nativeElement as HTMLElement
    const [ appCard ] = Array.from(el.childNodes)
    
    expect(appCard.childNodes.length).toBe(1)

    const [ table ] = Array.from(appCard.childNodes)

    expect(table.nodeName).toBe('APP-DYNAMIC-TABLE')
  });

  it('should instantiate model', () => {
    const expectModel: DynamicTableModel<WinnerByYear> = {
      columns: [
        { property: 'year', title: 'Year' },
        { property: 'winnerCount', title: 'Win Count' }
      ]
    }

    expect(fixture.componentInstance.model).toEqual(expectModel)
  })

  it('should load data calling api', () => {
    fixture.componentInstance.ngOnInit()
    
    expect(fixture.componentInstance.data).toBe(mockedData.years)
  })
});
