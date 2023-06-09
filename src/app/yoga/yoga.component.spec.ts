/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YogaComponent } from './yoga.component';

describe('YogaComponent', () => {
  let component: YogaComponent;
  let fixture: ComponentFixture<YogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
