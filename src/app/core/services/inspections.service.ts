import { Injectable } from '@angular/core';
import { inspectionData } from '../../_fake-db/inspections';

@Injectable({
  providedIn: 'root'
})
export class InspectionsService {

  constructor() { }

  getAll() {
    return inspectionData;
  }
}
