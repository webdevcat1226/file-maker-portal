import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageName: string;
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((res) => {
      this.pageName = res['params']['id'];
      console.log(this.pageName);
    });
    this.getData().then(res => {

    }).catch(aa => {

    });
  }

  getData(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }

  getDataCallBack(fn) {

  }

}
