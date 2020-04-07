import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubmittedQuoteModalComponent } from './unsubmitted-quote-modal.component';

describe('UnsubmittedQuoteModalComponent', () => {
  let component: UnsubmittedQuoteModalComponent;
  let fixture: ComponentFixture<UnsubmittedQuoteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubmittedQuoteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubmittedQuoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
