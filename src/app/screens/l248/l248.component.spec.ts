import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L248Component } from './l248.component';

describe('L248Component', () => {
  let component: L248Component;
  let fixture: ComponentFixture<L248Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L248Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
