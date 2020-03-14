import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    conform_password: ['', Validators.required]
  });

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }

  async ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}
