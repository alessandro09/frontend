/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListWinnersByYearComponent } from './list-winners-by-year.component'

describe('ListWinnersByYearComponent', () => {
  let component: ListWinnersByYearComponent;
  let fixture: ComponentFixture<ListWinnersByYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWinnersByYearComponent ],
      imports: [ HttpClientTestingModule ]
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
});
