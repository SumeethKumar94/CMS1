import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabreportformComponent } from './labreportform.component';

describe('LabreportformComponent', () => {
  let component: LabreportformComponent;
  let fixture: ComponentFixture<LabreportformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabreportformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabreportformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
