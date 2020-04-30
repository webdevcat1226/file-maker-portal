import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { applications } from '../../_fake-db/applications';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
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
    return applications;
  }

  findById(id: string) {
    return applications.find(x => x.id === id);
  }

  getProductionInformation(): Observable<any> {
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
    // return this.httpClient.get(`${this.baseURL}/fmi/data/${this.version}/databases/${this.dbName}/layouts/${layoutInURL}/records/${115}`);
  }
}
