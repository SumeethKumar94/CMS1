import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacybillprintingComponent } from './pharmacybillprinting.component';

describe('PharmacybillprintingComponent', () => {
  let component: PharmacybillprintingComponent;
  let fixture: ComponentFixture<PharmacybillprintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacybillprintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacybillprintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
