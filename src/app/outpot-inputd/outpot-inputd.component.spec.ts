import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutpotInputdComponent } from './outpot-inputd.component';

describe('OutpotInputdComponent', () => {
  let component: OutpotInputdComponent;
  let fixture: ComponentFixture<OutpotInputdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutpotInputdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutpotInputdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
