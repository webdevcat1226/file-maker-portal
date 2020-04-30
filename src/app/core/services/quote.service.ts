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
  private dbName: string;
  private version: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseURL = environment.baseURL;
    this.dbName = environment.dbName;
    this.version = environment.version;
  }

  getAll() {
    return quotes;
  }

  getQuotes(): Observable<any> {
    const token = window.localStorage.getItem('token');
    return this.httpClient.get(`${environment.sessionServer}/quote/quotes?token=${token}`);
    const layoutName = 'Local_New_App_Quote';
    const layoutInURL = layoutName.replace(' ', '%20');
    console.log(layoutInURL);
    const body = {
      query: [
        {
          Status: 'Unsubmitted'
        }, {
          Status: 'Pending'
        }, {
          Status: 'Quote Received'
        }
      ]
    };
    return this.httpClient.post(`${this.baseURL}/fmi/data/${this.version}/databases/${this.dbName}/layouts/${layoutInURL}/_find`, body);
  }
}
