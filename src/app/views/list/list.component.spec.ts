/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable } from 'rxjs'
import { PaginatedResult } from 'src/app/models/PaginatedResult'
import { ApiService } from 'src/app/services/api.service'

import { ListComponent } from './list.component'

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  const mockedData: PaginatedResult<any> = { content: [] } as any

  const getPaginatedMovies = new Observable(sub => {
    sub.next(mockedData)
  })

  const mockApi = jasmine.createSpyObj('ApiService', ['getPaginatedMovies'])

  mockApi.getPaginatedMovies.and.returnValue(getPaginatedMovies)

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: ApiService, useValue: mockApi } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
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
    expect((appCard as any).getAttribute('title')).toBe('List movies')
  });

  it('should render children to app-card', () => {
    const el = fixture.nativeElement as HTMLElement
    const [ appCard ] = Array.from(el.childNodes)
    
    expect(appCard.childNodes.length).toBe(1)

    const [ table ] = Array.from(appCard.childNodes)

    expect(table.nodeName).toBe('APP-DYNAMIC-TABLE')
  });

  it('should instantiate model', () => {
    expect(fixture.componentInstance.model).toBeTruthy()
  })

  it('should load data calling api', () => {
    fixture.componentInstance.ngOnInit()
    
    expect(fixture.componentInstance.data).toBe(mockedData)

    expect(mockApi.getPaginatedMovies).toHaveBeenCalledWith({ page: 0, size: 15 })
  })

  it('should load data calling api with params', () => {
    fixture.componentInstance.handleSearch({ year: 2015, winner: true })
    
    expect(fixture.componentInstance.data).toBe(mockedData)

    expect(mockApi.getPaginatedMovies).toHaveBeenCalledWith({ page: 0, size: 15, year: 2015, winner: true })
  })
});
