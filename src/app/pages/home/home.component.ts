import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quotes = [
    {number: 1},
    {number: 2},
    {number: 3},
    {number: 4},
    {number: 5},
    {number: 6},
    {number: 7},
    {number: 8},
    {number: 9},
    {number: 10}
  ];

  submittedApplications = [
    {number: 1},
    {number: 2},
    {number: 3},
    {number: 4},
    {number: 5},
    {number: 6},
    {number: 7},
    {number: 8},
    {number: 9},
    {number: 10},
    {number: 11},
    {number: 12},
    {number: 13},
    {number: 14},
    {number: 15},
    {number: 16},
    {number: 17},
  ];

  processedApplications = [
    {number: 1},
    {number: 2},
    {number: 3},
    {number: 4},
    {number: 5},
    {number: 6},
    {number: 7},
    {number: 8},
    {number: 9},
    {number: 10},
    {number: 11},
    {number: 12},
    {number: 13},
    {number: 14},
    {number: 15},
    {number: 16},
    {number: 17},
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }
}
