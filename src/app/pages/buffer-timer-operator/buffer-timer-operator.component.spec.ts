import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferTimerOperatorComponent } from './buffer-timer-operator.component';

describe('BufferTimerOperatorComponent', () => {
  let component: BufferTimerOperatorComponent;
  let fixture: ComponentFixture<BufferTimerOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferTimerOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferTimerOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
