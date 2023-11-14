import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerviewComponent } from './employerview.component';

describe('EmployerviewComponent', () => {
  let component: EmployerviewComponent;
  let fixture: ComponentFixture<EmployerviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
