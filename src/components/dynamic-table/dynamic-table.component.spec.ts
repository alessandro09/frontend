/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { DynamicTableComponent } from './dynamic-table.component'

describe('DynamicTableComponent', () => {
  let component: DynamicTableComponent<any>;
  let fixture: ComponentFixture<DynamicTableComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
