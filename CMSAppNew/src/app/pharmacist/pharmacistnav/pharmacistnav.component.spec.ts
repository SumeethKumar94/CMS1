import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacistnavComponent } from './pharmacistnav.component';

describe('PharmacistnavComponent', () => {
  let component: PharmacistnavComponent;
  let fixture: ComponentFixture<PharmacistnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
