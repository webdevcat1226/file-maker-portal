import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmendmentsModalComponent } from './amendments-modal.component';

describe('AmendmentsModalComponent', () => {
  let component: AmendmentsModalComponent;
  let fixture: ComponentFixture<AmendmentsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmendmentsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmendmentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
