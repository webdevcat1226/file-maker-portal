import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  async getAll(): Promise<any> {
    const token = window.localStorage.getItem('token');
    return this.httpClient.get(`${this.baseURL}/quote/all-quotes?token=${token}`).toPromise();
  }

  getQuotes(): Observable<any> {
    const token = window.localStorage.getItem('token');
    return this.httpClient.get(`${this.baseURL}/quote/quotes?token=${token}`);
  }

  getSubmittedApplications(): Observable<any> {
    const token = window.localStorage.getItem('token');
    return this.httpClient.get(`${this.baseURL}/quote/submitted-applications?token=${token}`);
  }
}
