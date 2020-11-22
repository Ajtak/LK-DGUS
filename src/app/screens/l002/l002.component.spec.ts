import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L002Component } from './l002.component';

describe('L002Component', () => {
  let component: L002Component;
  let fixture: ComponentFixture<L002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
