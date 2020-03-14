import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthResponse } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/login', {email, password});
  }

}
