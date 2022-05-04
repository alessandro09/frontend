/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ListExtremesComponent } from './list-extremes.component'

describe('ListExtremesComponent', () => {
  let component: ListExtremesComponent;
  let fixture: ComponentFixture<ListExtremesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExtremesComponent ],
      imports: [ HttpClientTestingModule ]
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
});
