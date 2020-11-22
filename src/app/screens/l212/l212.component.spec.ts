import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L212Component } from './l212.component';

describe('L212Component', () => {
  let component: L212Component;
  let fixture: ComponentFixture<L212Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L212Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
