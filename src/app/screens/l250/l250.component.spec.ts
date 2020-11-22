import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L250Component } from './l250.component';

describe('L250Component', () => {
  let component: L250Component;
  let fixture: ComponentFixture<L250Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L250Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
