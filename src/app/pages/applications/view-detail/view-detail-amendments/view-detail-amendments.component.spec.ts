import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailAmendmentsComponent } from './view-detail-amendments.component';

describe('ViewDetailAmendmentsComponent', () => {
  let component: ViewDetailAmendmentsComponent;
  let fixture: ComponentFixture<ViewDetailAmendmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailAmendmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailAmendmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
