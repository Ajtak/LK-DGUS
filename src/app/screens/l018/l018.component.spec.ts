import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L018Component } from './l018.component';

describe('L018Component', () => {
  let component: L018Component;
  let fixture: ComponentFixture<L018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
