import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthResponse } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin = false;

  constructor(
    private http: HttpClient
  ) {
    this.isLogged();
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/login', {email, password});
  }

  isLogged() {
    this.isLogin = false;
  }


}
