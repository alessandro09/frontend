/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TfootComponent } from './tfoot.component';

describe('TfootComponent', () => {
  let component: TfootComponent;
  let fixture: ComponentFixture<TfootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
