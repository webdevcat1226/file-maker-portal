import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { first, last, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {

  data;
  unsub;

  userId  = 0;
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
    const data = await this.authService.dataStream$.pipe(
    ).toPromise();
    console.log(data);
  }

  ngOnDestroy(): void {
  }

  // createNew() {
  //   this.userId ++;
  //   this.authService.dataStreamTT$.subscribe(data => {
  //     console.log(this.userId + ' user data: ', data);
  //   })
  // }

}
