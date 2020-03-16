import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { waitForMilliSecond } from '../../core/utils/common.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    password: ['', Validators.required],
    conform_password: ['', Validators.required]
  });

  isLoading = false;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  async ngOnInit() {
  }

  async signUp(){
    try {
      this.isLoading = true;
      await waitForMilliSecond(3000); // will call api
      this.isLoading = false;
      await this.router.navigate(['/login']);
    } catch (e) {

    } finally {

    }
  }
  ngOnDestroy(): void {
  }
}
