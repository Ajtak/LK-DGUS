import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L206Component } from './l206.component';

describe('L206Component', () => {
  let component: L206Component;
  let fixture: ComponentFixture<L206Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L206Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
