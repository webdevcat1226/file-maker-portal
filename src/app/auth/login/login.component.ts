import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/services/auth.service';
import { waitForMilliSecond } from '../../core/utils/common.util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {

  isLoading = false;

  count = 0;

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  async login() {
    try {
      this.isLoading = true;
      this.loginForm.disable();
      await waitForMilliSecond(3000); // will call api
      this.isLoading = false;
      this.router.navigate(['/home']);
    } catch (e) {

    } finally {

    }
  }
}
