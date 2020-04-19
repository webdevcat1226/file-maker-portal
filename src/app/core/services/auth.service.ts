import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { users } from '../../_fake-db/users';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseAPIPath: string = environment.baseURL;
  private version: string = environment.version;
  private dbName: string = environment.dbName;
  users = users;

  constructor(
    private http: HttpClient
  ) {}

  login(email: string, password: string) {
    const found = this.users.find(user => user.email === email);
    return found && found.password === password;
  }

  Login(email: string, password: string) {
    // username : dev, password : blue1234
    email = 'dev';
    const basicB64 = `Basic ${btoa(`${email}:${password}`)}==`;
    const headers = new HttpHeaders()
      .set('Contet-Type', 'application/json')
      .set('Authorization', basicB64);
    return this.http.post(`${this.baseAPIPath}/fmi/data/${this.version}/databases/${this.dbName}/sessions`, {}, { headers });
  }

}
