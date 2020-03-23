import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { users } from '../../_fake-db/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users = users;

  constructor(
    private http: HttpClient
  ) {}

  login(email: string, password: string) {
    const found = this.users.find(user => user.email === email);
    return found && found.password === password;
  }

}
