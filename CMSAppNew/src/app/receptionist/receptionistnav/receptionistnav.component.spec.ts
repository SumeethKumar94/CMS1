import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistnavComponent } from './receptionistnav.component';

describe('ReceptionistnavComponent', () => {
  let component: ReceptionistnavComponent;
  let fixture: ComponentFixture<ReceptionistnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
