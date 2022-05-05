/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { Observable } from 'rxjs'
import { Award, IntervalAwards } from 'src/app/models/IntervalAwards'
import { ApiService } from 'src/app/services/api.service'

import { DynamicTableModel } from '../../../../components/dynamic-table/dynamic-table.model'
import { ListExtremesComponent } from './list-extremes.component'

describe('ListExtremesComponent', () => {
  let component: ListExtremesComponent;
  let fixture: ComponentFixture<ListExtremesComponent>;

  const mockedData: IntervalAwards =  {
    max: [],
    min: []
  }

  const getIntervalAwards = new Observable(sub => {
    sub.next(mockedData)
  })

  const mockApi = jasmine.createSpyObj('ApiService', ['getIntervalAwards'])

  mockApi.getIntervalAwards.and.returnValue(getIntervalAwards)

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExtremesComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: ApiService, useValue: mockApi } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExtremesComponent);
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
    expect((appCard as any).getAttribute('title')).toBe('Procedurs with longest and shortest interval between wins')
  });

  it('should render children to app-card', () => {
    const el = fixture.nativeElement as HTMLElement
    const [ appCard ] = Array.from(el.childNodes)
    
    expect(appCard.childNodes.length).toBe(4)

    const [ header1, table1, header2, table2 ] = Array.from(appCard.childNodes)

    expect(header1.nodeName).toBe('H4')
    expect((header1 as any).innerText).toBe('Maximum')

    expect(table1.nodeName).toBe('APP-DYNAMIC-TABLE')

    expect(header2.nodeName).toBe('H4')
    expect((header2 as any).innerText).toBe('Minimum')

    expect(table2.nodeName).toBe('APP-DYNAMIC-TABLE')
  });

  it('should instantiate model', () => {
    const expectModel: DynamicTableModel<Award> = {
      columns: [
        { property: 'producer', title: 'Producer' },
        { property: 'interval', title: 'Interval' },
        { property: 'previousWin', title: 'Previous Year' },
        { property: 'followingWin', title: 'Following Year' }
      ]
    }

    expect(fixture.componentInstance.model).toEqual(expectModel)
  })

  it('should load data calling api', () => {
    fixture.componentInstance.ngOnInit()
    
    expect(fixture.componentInstance.data).toBe(mockedData)
  })
});
