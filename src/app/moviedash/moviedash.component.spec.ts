import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedashComponent } from './moviedash.component';

describe('MoviedashComponent', () => {
  let component: MoviedashComponent;
  let fixture: ComponentFixture<MoviedashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
