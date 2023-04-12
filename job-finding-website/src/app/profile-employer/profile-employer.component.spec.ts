import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEmployerComponent } from './profile-employer.component';

describe('ProfileEmployerComponent', () => {
  let component: ProfileEmployerComponent;
  let fixture: ComponentFixture<ProfileEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
