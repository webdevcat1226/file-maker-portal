import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { AuthResponse } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  dataStream$: Subject<number> = new Subject<number>();
  dataStreamTT$: BehaviorSubject<number> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('/login', {email, password});
  }

}
