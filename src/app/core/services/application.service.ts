import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { applications } from '../../_fake-db/applications';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private baseURL: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseURL = environment.baseAPIURL;
  }

  getAll() {
    return applications;
  }

  findById(id: string) {
    return applications.find(x => x.id === id);
  }

  getProductionInformation(): Observable<any> {
    return of(1);
  }
}
