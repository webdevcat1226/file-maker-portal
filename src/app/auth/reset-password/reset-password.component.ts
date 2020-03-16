import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { waitForMilliSecond } from '../../core/utils/common.util';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup = this.fb.group({
    password: ['', [Validators.required]],
    confirm: ['', Validators.required]
  });

  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  async resetPassword() {
    this.isLoading = true;
    await waitForMilliSecond(3000); //will call api
    this.isLoading = false;

    await this.router.navigate(['/login']);
  }
}
