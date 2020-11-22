import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L208Component } from './l208.component';

describe('L208Component', () => {
  let component: L208Component;
  let fixture: ComponentFixture<L208Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L208Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L208Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
