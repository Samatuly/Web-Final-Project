import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesEmployerComponent } from './candidates-employer.component';

describe('CandidatesEmployerComponent', () => {
  let component: CandidatesEmployerComponent;
  let fixture: ComponentFixture<CandidatesEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatesEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatesEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
