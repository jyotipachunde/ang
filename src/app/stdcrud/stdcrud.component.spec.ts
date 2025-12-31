import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdcrudComponent } from './stdcrud.component';

describe('StdcrudComponent', () => {
  let component: StdcrudComponent;
  let fixture: ComponentFixture<StdcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdcrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
