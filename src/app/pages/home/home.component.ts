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

  public arrQuotes: Array<any> = [];
  public arrSubmittedApplications: Array<any> = [];
  public processedApplications: Array<any> = [];

  constructor(
    private modal: NgbModal,
    private quoteService: QuoteService,
    private applicationService: ApplicationService
  ) {
  }

  ngOnInit(): void {
    this.initialize();
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

  openApplicationModal(application = null) {
    const modalRef = this.modal.open(ApplicationModalComponent);
    modalRef.componentInstance.application = application;
    modalRef.result.then(res => {
      console.log(res);
    }, reason => {
      console.log('Quote Modal Closed.');
    });
  }

  onClickTestBtn() {}

  async initialize(): Promise<void> {
    try {
      const data = await this.quoteService.getAll();
      this.arrQuotes = data.quotes || [];
      this.arrSubmittedApplications = data.submittedApplications || [];
    } catch (e) {
      console.log(e);
    } finally {}
  }
}
