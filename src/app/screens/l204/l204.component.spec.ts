import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L204Component } from './l204.component';

describe('L204Component', () => {
  let component: L204Component;
  let fixture: ComponentFixture<L204Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L204Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
