import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L249Component } from './l249.component';

describe('L249Component', () => {
  let component: L249Component;
  let fixture: ComponentFixture<L249Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L249Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
