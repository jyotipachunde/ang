import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpotInputComponent } from './outpot-input.component';

describe('OutpotInputComponent', () => {
  let component: OutpotInputComponent;
  let fixture: ComponentFixture<OutpotInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpotInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutpotInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
