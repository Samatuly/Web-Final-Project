import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAsEmployerComponent } from './login-as-employer.component';

describe('LoginAsEmployerComponent', () => {
  let component: LoginAsEmployerComponent;
  let fixture: ComponentFixture<LoginAsEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAsEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAsEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
