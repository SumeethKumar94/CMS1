import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllappointemntsComponent } from './allappointemnts.component';

describe('AllappointemntsComponent', () => {
  let component: AllappointemntsComponent;
  let fixture: ComponentFixture<AllappointemntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllappointemntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllappointemntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
