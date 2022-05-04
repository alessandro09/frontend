/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TdComponent } from './td.component';

describe('TdComponent', () => {
  let component: TdComponent;
  let fixture: ComponentFixture<TdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
