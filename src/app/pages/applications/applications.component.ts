import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  applicationsInfo = [
    {
      name: "Test4",
      address: "1 East Fen Common, Soham, CH75JH",
      certificate: "No",
      unresolvedAmendments: 1,
      unresolvedHighlights: 14,
      reviewedDocs: 0,
      warranty: "Advantage",
      inspector: "Will Jarvis"
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
