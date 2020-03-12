import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/services/auth.service';
// import { Subscription } from 'rxjs';

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
    // private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  async login() {
    this.count ++;
    this.authService.dataStream$.next(this.count);
    this.authService.dataStreamTT$.next(this.count);
    // try {
    //   this.isLoading = true;
    //   const data = this.loginForm.value;
    //
    //   await this.authService.login(data.email, data.password).toPromise();
    // } catch (e) {
    //   console.log(e);
    // } finally {
    //   this.isLoading = false;
    // }
  }

  // stop() {
  //   this.authService.dataStream$.complete();
  // }

}
