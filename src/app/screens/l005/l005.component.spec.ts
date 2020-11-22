import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L005Component } from './l005.component';

describe('L005Component', () => {
  let component: L005Component;
  let fixture: ComponentFixture<L005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L005Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
