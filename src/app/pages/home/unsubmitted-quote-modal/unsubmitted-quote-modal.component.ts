import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-unsubmitted-quote-modal',
  templateUrl: './unsubmitted-quote-modal.component.html',
  styleUrls: ['./unsubmitted-quote-modal.component.scss']
})
export class UnsubmittedQuoteModalComponent implements OnInit {

  unsubmittedQuote:any;

  constructor(
    public modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    console.log(this.unsubmittedQuote);
  }

}
