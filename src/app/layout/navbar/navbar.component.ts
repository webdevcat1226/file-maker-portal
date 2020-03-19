import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu = [
    { label: 'Home', route: '/home', icon: 'icon-home' },
    { label: 'Quote', route: '/quote', icon: 'icon-note'},
    { label: 'Applications', route: '/applications', icon: 'icon-grid' },
    { label: 'Refresh', route: '/refresh', icon: 'icon-refresh' },
    { label: 'My Account', route: '/account', icon: 'icon-user' },
    { label: 'Search', route: '/search', icon: 'icon-magnifier-remove' },
  ];

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.isLogin = false;
    this.router.navigate(['/login']);
  }
}
