import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
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

  constructor(
    private authService: AuthService
  ) { }

  async ngOnInit() {
    const data = await this.authService.dataStream$.pipe(
    ).toPromise();
    console.log(data);
  }

  ngOnDestroy(): void {
  }

  createNew() {
    this.userId ++;
    this.authService.dataStreamTT$.subscribe(data => {
      console.log(this.userId + ' user data: ', data);
    })
  }

}
