import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAsEmployeeComponent } from './login-as-employee.component';

describe('LoginAsEmployeeComponent', () => {
  let component: LoginAsEmployeeComponent;
  let fixture: ComponentFixture<LoginAsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAsEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
