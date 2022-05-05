/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DashboardComponent } from './dashboard.component'

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render children', () => {
    const el = fixture.nativeElement as HTMLElement

    expect(el.childNodes.length).toBe(4)

    const childs = ['APP-LIST-WINNERS-BY-YEAR', 'APP-LIST-TOP-THREE-STUDIOS', 'APP-LIST-EXTREMES', 'APP-LIST-MOVIE-WINNERS-BY-YEAR']
    
    expect(childs).toEqual(childs)
  });
});
