import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.quotes.forEach(function (item) {
      if(item.status == "Unsubmitted") {
        item.viewButtonStyle = "visibility: visible"
      } else {
        item.viewButtonStyle = "visibility: hidden"
      }
    })
  }

  ngOnInit(): void {
  }
}
