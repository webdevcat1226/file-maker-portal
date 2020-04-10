import { Injectable } from '@angular/core';
import { inspectionData, inspectionTypes } from '../../_fake-db/inspections';

@Injectable({
  providedIn: 'root'
})
export class InspectionsService {

  constructor() {}

  getInspectionsTypes() {
    return new Promise(rs => rs(inspectionTypes));
  }

  getInspections() {
    return new Promise(rs => rs(inspectionData));
  }

  getAll() {
    return new Promise(rs => rs({
      types: inspectionTypes,
      inspections: inspectionData
    }));
  }
}
