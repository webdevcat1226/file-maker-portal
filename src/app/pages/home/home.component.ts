import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { QuoteModalComponent } from './quote-modal/quote-modal.component';
import { ApplicationModalComponent } from './application-modal/application-modal.component';
import { QuoteService } from '../../core/services/quote.service';
import { UnsubmittedQuoteModalComponent } from './unsubmitted-quote-modal/unsubmitted-quote-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quotes = [];

  submittedApplications = [];

  processedApplications = [];

  constructor(
    private modal: NgbModal,
    private quoteService: QuoteService
  ) {
  }

  ngOnInit(): void {
    this.quotes = this.quoteService.getAll();
    this.quotes.forEach(function (item) {
      if (item.status == "Unsubmitted") {
        item.viewButtonStyle = "visibility: visible"
      } else {
        item.viewButtonStyle = "visibility: hidden"
      }
    })
  }

  openQuoteModal() {
    const modalRef = this.modal.open(QuoteModalComponent, {backdrop: 'static'});

    modalRef.result.then(res => {
      console.log(res);
    }, reason => {
      console.log(reason);
    });
  }

  openUnsubmittedQuoteModal(item) {
    const modalRef = this.modal.open(UnsubmittedQuoteModalComponent, {backdrop: 'static'});
    modalRef.componentInstance.unsubmittedQuote = item;
    modalRef.result.then(res => {
      console.log(res);
    }, reason => {
      console.log(reason);
    });
  }

  openApplicationModal() {
    const modalRef = this.modal.open(ApplicationModalComponent, {backdrop: 'static'});

    modalRef.result.then(res => {
      console.log(res);
    }, reason => {
      console.log(reason);
    });
  }
}
