import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputwithmovieComponent } from './inputwithmovie.component';

describe('InputwithmovieComponent', () => {
  let component: InputwithmovieComponent;
  let fixture: ComponentFixture<InputwithmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputwithmovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputwithmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
