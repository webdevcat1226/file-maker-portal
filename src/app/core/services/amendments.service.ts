import { Injectable } from '@angular/core';
import { amendments } from '../../_fake-db/amendments';

@Injectable({
  providedIn: 'root'
})
export class AmendmentsService {

  constructor() { }

  getAll() {
    return amendments;
  }
}
