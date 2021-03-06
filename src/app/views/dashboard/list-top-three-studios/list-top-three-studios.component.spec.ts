/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable } from 'rxjs'
import { Studio } from 'src/app/models/Studios'
import { ApiService } from 'src/app/services/api.service'

import { DynamicTableModel } from '../../../../components/dynamic-table/dynamic-table.model'
import { ListTopThreeStudiosComponent } from './list-top-three-studios.component'

describe('ListTopThreeStudiosComponent', () => {
  let component: ListTopThreeStudiosComponent;
  let fixture: ComponentFixture<ListTopThreeStudiosComponent>;

  const mockedData = { studios: ['a', 'b', 'c', 'd'] }

  const getWinningStudios = new Observable(sub => {
    sub.next(mockedData)
  })

  const mockApi = jasmine.createSpyObj('ApiService', ['getWinningStudios'])

  mockApi.getWinningStudios.and.returnValue(getWinningStudios)

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTopThreeStudiosComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: ApiService, useValue: mockApi } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopThreeStudiosComponent);
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
    expect((appCard as any).getAttribute('title')).toBe('Top 3 studios with winners')
  });

  it('should render children to app-card', () => {
    const el = fixture.nativeElement as HTMLElement
    const [ appCard ] = Array.from(el.childNodes)
    
    expect(appCard.childNodes.length).toBe(1)

    const [ table ] = Array.from(appCard.childNodes)

    expect(table.nodeName).toBe('APP-DYNAMIC-TABLE')
  });

  it('should instantiate model', () => {
    const expectModel: DynamicTableModel<Studio> = {
      columns: [
        { property: 'name', title: 'Name' },
        { property: 'winCount', title: 'Win Count' }
      ]
    }

    expect(fixture.componentInstance.model).toEqual(expectModel)
  })

  it('should load data calling api', () => {
    fixture.componentInstance.ngOnInit()
    
    expect(fixture.componentInstance.data).toEqual(['a', 'b', 'c'] as any)
  })
});
