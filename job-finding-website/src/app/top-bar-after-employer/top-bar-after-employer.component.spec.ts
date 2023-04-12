import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarAfterEmployerComponent } from './top-bar-after-employer.component';

describe('TopBarAfterEmployerComponent', () => {
  let component: TopBarAfterEmployerComponent;
  let fixture: ComponentFixture<TopBarAfterEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarAfterEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarAfterEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
