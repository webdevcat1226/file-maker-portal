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
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  private userEmail = "test@test.com";
  private userPassword = "123456";

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.authService.isLogin = this.loginForm.value.email == this.userEmail && this.loginForm.value.password == this.userPassword;
  }

  ngOnDestroy(): void {
  }

  async login() {
    this.ngOnInit();
    try {
      console.log(this.loginForm.value.email);
      if (this.authService.isLogin) {
        this.isLoading = true;
        // this.loginForm.disable();
        await waitForMilliSecond(3000); // will call api
        this.isLoading = false;
        await this.router.navigate(['/home']);
      } else {
        throw "Incorrect Email or Password";
      }
    } catch (e) {
      console.log(e);
    } finally {

    }
  }
}
