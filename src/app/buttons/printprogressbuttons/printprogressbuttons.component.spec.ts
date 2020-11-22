import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintprogressbuttonsComponent } from './printprogressbuttons.component';

describe('PrintprogressbuttonsComponent', () => {
  let component: PrintprogressbuttonsComponent;
  let fixture: ComponentFixture<PrintprogressbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintprogressbuttonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintprogressbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
