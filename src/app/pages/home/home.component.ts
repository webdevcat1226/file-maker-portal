import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { QuoteModalComponent } from './quote-modal/quote-modal.component';
import { ApplicationModalComponent } from './application-modal/application-modal.component';
import { QuoteService } from '../../core/services/quote.service';
import { ApplicationService } from '../../core/services/application.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arrQuotes: Array<any> = [];

  submittedApplications: Array<any> = [];

  processedApplications: Array<any> = [];

  constructor(
    private modal: NgbModal,
    private quoteService: QuoteService,
    private applicationService: ApplicationService
  ) {
  }

  ngOnInit(): void {
    this.initialize();
    this.submittedApplications = this.applicationService.getAll();
  }

  openQuoteModal(quote) {
    // const modalRef = this.modal.open(QuoteModalComponent, { backdrop: 'static' });
    const modalRef = this.modal.open(QuoteModalComponent);
    modalRef.componentInstance.quote = quote;
    modalRef.result.then(res => {
      console.log(res);
    }, reason => {
      console.log('Quote Modal Closed.');
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

  onClickTestBtn() {

  }
  initialize() {
    this.quoteService.getQuotes().subscribe(quotes => {
      this.arrQuotes = quotes;
      console.log(this.arrQuotes);
    }, err => {
      console.log(err);
    });
  }
}
