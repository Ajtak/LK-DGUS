import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L000Component } from './l000.component';

describe('L000Component', () => {
  let component: L000Component;
  let fixture: ComponentFixture<L000Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L000Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
