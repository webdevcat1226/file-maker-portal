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

  login() {
    const form = this.loginForm.value;
    this.authService.Login(form.email, form.password).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
    //   console.log(match);
    //   if (match) {
    //     this.isLoading = true;
    //     await waitForMilliSecond(3000);
    //     this.isLoading = false;
    //     await this.router.navigate(['/home']);
    //   } else {
    //     alert('Incorrect email or password');
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  }
}
