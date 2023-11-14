import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeViewComponent } from './employeeview.component';

describe('EmployeeViewComponent', () => {
  let component: EmployeeViewComponent;
  let fixture: ComponentFixture<EmployeeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
