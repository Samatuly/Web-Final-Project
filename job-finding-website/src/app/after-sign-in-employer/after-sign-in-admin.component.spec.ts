import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSignInAdminComponent } from './after-sign-in-admin.component';

describe('AfterSignInAdminComponent', () => {
  let component: AfterSignInAdminComponent;
  let fixture: ComponentFixture<AfterSignInAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterSignInAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfterSignInAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
