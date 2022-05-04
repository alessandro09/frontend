/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TrComponent } from './tr.component';

describe('TrComponent', () => {
  let component: TrComponent;
  let fixture: ComponentFixture<TrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
