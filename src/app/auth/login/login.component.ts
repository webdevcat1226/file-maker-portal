import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

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

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  private static validateEmail(email: boolean | string | ((control: AbstractControl) => (ValidationErrors | null)) | (string | ((control: AbstractControl) => (ValidationErrors | null))[])[] | "email") {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async login() {
    try {
      // this.loginForm.disable();

      this.isLoading = LoginComponent.validateEmail(this.loginForm.value.email);
      await waitForMilliSecond(3000); // will call api

      console.log(this.loginForm.value.email, this.isLoading);
      if(this.isLoading){
        await this.router.navigate(['/home']);
      }
    } catch (e) {

    } finally {

    }
  }
}
