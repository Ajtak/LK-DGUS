import { ComponentFixture, TestBed } from '@angular/core/testing';

import { L001Component } from './l001.component';

describe('L001Component', () => {
  let component: L001Component;
  let fixture: ComponentFixture<L001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ L001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(L001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
