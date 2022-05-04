/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListTopThreeStudiosComponent } from './list-top-three-studios.component'

describe('ListTopThreeStudiosComponent', () => {
  let component: ListTopThreeStudiosComponent;
  let fixture: ComponentFixture<ListTopThreeStudiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTopThreeStudiosComponent ],
      imports: [ HttpClientTestingModule ]
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
});
