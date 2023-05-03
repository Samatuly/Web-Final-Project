import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningBoxComponent } from './warning-box.component';

describe('WarningBoxComponent', () => {
  let component: WarningBoxComponent;
  let fixture: ComponentFixture<WarningBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
