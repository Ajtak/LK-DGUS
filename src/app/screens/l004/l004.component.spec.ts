import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L004Component } from './l004.component';

describe('L004Component', () => {
  let component: L004Component;
  let fixture: ComponentFixture<L004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
