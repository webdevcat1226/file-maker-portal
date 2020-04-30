import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quote-modal',
  templateUrl: './quote-modal.component.html',
  styleUrls: ['./quote-modal.component.scss']
})
export class QuoteModalComponent implements OnInit {
  @Input() public quote;
  public tempQuote: any;
  constructor(
    public modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.tempQuote = Object.assign(this.quote);
  }

  onSubmitQuote() {
    this.modal.close({ quote: this.tempQuote });
  }
}
