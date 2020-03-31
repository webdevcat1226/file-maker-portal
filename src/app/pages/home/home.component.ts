import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuoteModalComponent } from './quote-modal/quote-modal.component';
import { ApplicationModalComponent } from './application-modal/application-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quotes = [
    {availability: "N/A", type: "", status: "Unsubmitted", viewButtonStyle: ""},
    {availability: "N/A", type: "", status: "Unsubmitted", viewButtonStyle: ""},
    {availability: "N/A", type: "", status: "Unsubmitted", viewButtonStyle: ""},
    {availability: "N/A", type: "Test", status: "Pending", viewButtonStyle: ""},
    {availability: "N/A", type: "", status: "Pending", viewButtonStyle: ""},
  ];

  submittedApplications = [];

  processedApplications = [];

  constructor(
    private modal: NgbModal
  ) {
    this.quotes.forEach(function (item) {
      if (item.status == "Unsubmitted") {
        item.viewButtonStyle = "visibility: visible"
      } else {
        item.viewButtonStyle = "visibility: hidden"
      }
    })
  }

  ngOnInit(): void {
  }

  openQuoteModal() {
    const modalRef = this.modal.open(QuoteModalComponent);
    // modalRef.componentInstance.data = this.data;

    modalRef.result.then(res => {
      console.log(res);
    }, reason => {
      console.log(reason);
    });
  }

  openApplicationModal() {
    const modalRef = this.modal.open(ApplicationModalComponent);
    // modalRef.componentInstance.data = this.data;

    modalRef.result.then(res => {
      console.log(res);
    }, reason => {
      console.log(reason);
    });
  }
}
