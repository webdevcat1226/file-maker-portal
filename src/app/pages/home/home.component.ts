import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quotes = [
    {availability: "N/A", type: "", status: "Unsubmitted", buttonStyle:"visibility: visible"},
    {availability: "N/A", type: "", status: "Unsubmitted", buttonStyle:"visibility: visible"},
    {availability: "N/A", type: "", status: "Unsubmitted", buttonStyle:"visibility: visible"},
    {availability: "N/A", type: "Test", status: "Pending", buttonStyle:"visibility: hidden"},
    {availability: "N/A", type: "", status: "Pending", buttonStyle:"visibility: hidden"},
  ];

  submittedApplications = [
  ];

  processedApplications = [
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
