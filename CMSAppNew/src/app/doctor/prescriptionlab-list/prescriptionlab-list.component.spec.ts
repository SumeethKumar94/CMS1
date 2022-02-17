import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionlabListComponent } from './prescriptionlab-list.component';

describe('PrescriptionlabListComponent', () => {
  let component: PrescriptionlabListComponent;
  let fixture: ComponentFixture<PrescriptionlabListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrescriptionlabListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionlabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
