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
    { label: 'Applications', route: '/applications', icon: 'icon-grid'},
    { label: 'My Account', route: '/account', icon: 'icon-user' },
  ];

  userPhoto: any = '/assets/background-images/user.png';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.router.navigate(['/login']);
    }, err => {
      console.log(err);
    });
  }

  handleFileInput(files) {
    if (FileReader && files && files.length) {
      const fr = new FileReader();
      fr.onload = () => {
        this.userPhoto = fr.result;
      };
      fr.readAsDataURL(files[0]);
    }
  }
}
