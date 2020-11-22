import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L003Component } from './l003.component';

describe('L003Component', () => {
  let component: L003Component;
  let fixture: ComponentFixture<L003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
