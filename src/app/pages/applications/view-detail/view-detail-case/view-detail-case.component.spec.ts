import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailCaseComponent } from './view-detail-case.component';

describe('ViewDetailCaseComponent', () => {
  let component: ViewDetailCaseComponent;
  let fixture: ComponentFixture<ViewDetailCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
