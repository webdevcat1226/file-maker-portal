import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu = [
    { label: 'Home', route: '/home' },
    { label: 'Quote', route: '/quote' },
    { label: 'Applications', route: '/applications' },
    { label: 'My Account', route: '/account' },
    { label: 'Refresh', route: '/refresh' },
    { label: 'Search', route: '/search' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
