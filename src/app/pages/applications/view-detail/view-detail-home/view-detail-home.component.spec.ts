import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailHomeComponent } from './view-detail-home.component';

describe('ViewDetailHomeComponent', () => {
  let component: ViewDetailHomeComponent;
  let fixture: ComponentFixture<ViewDetailHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDetailHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
