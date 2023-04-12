import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarAfterComponent } from './top-bar-after.component';

describe('TopBarAfterComponent', () => {
  let component: TopBarAfterComponent;
  let fixture: ComponentFixture<TopBarAfterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarAfterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBarAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
