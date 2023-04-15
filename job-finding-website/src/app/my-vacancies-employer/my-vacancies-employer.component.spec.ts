import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVacanciesEmployerComponent } from './my-vacancies-employer.component';

describe('MyVacanciesEmployerComponent', () => {
  let component: MyVacanciesEmployerComponent;
  let fixture: ComponentFixture<MyVacanciesEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVacanciesEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyVacanciesEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
