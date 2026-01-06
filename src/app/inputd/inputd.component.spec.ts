import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdComponent } from './inputd.component';

describe('InputdComponent', () => {
  let component: InputdComponent;
  let fixture: ComponentFixture<InputdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
