import { Injectable } from '@angular/core';
import { applications } from '../../_fake-db/applications';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor() { }

  getAll() {
    return applications;
  }

  findById(id: string) {
    return applications.find(x => x.id === id);
  }
}
