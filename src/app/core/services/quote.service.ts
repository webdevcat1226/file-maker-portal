import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { quotes } from '../../_fake-db/quotes';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private baseURL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseURL = environment.baseAPIURL;
  }

  getAll() {
    return quotes;
  }

  getQuotes(): Observable<any> {
    const token = window.localStorage.getItem('token');
    return this.httpClient.get(`${this.baseURL}/quote/quotes?token=${token}`);
}
