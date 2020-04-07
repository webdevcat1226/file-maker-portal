import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuoteModalComponent } from './new-quote-modal.component';

describe('NewQuoteModalComponent', () => {
  let component: NewQuoteModalComponent;
  let fixture: ComponentFixture<NewQuoteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewQuoteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
