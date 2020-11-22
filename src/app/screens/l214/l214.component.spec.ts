import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L214Component } from './l214.component';

describe('L214Component', () => {
  let component: L214Component;
  let fixture: ComponentFixture<L214Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L214Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
