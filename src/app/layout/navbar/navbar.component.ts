import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu = [
    { label: 'Home', route: '/home', icon: 'icon-home' },
    { label: 'Quote', route: '/quote', icon: 'icon-trophy'},
    { label: 'Applications', route: '/applications', icon: 'icon-diamond' },
    { label: 'My Account', route: '/account', icon: 'icon-handbag' },
    { label: 'Refresh', route: '/refresh', icon: 'icon-drawer' },
    { label: 'Search', route: '/search', icon: 'icon-picture' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
