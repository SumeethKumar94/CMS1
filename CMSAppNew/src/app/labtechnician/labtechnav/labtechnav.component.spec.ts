import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtechnavComponent } from './labtechnav.component';

describe('LabtechnavComponent', () => {
  let component: LabtechnavComponent;
  let fixture: ComponentFixture<LabtechnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtechnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtechnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
