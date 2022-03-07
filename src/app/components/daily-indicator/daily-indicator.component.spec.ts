import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyIndicatorComponent } from './daily-indicator.component';

describe('DailyIndicatorComponent', () => {
  let component: DailyIndicatorComponent;
  let fixture: ComponentFixture<DailyIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
