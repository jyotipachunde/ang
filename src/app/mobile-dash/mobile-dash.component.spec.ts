import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDashComponent } from './mobile-dash.component';

describe('MobileDashComponent', () => {
  let component: MobileDashComponent;
  let fixture: ComponentFixture<MobileDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
