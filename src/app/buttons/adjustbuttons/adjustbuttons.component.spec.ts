import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustbuttonsComponent } from './adjustbuttons.component';

describe('AdjustbuttonsComponent', () => {
  let component: AdjustbuttonsComponent;
  let fixture: ComponentFixture<AdjustbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjustbuttonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
