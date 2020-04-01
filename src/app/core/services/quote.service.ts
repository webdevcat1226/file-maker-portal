import { Injectable } from '@angular/core';
import { quotes } from '../../_fake-db/quotes'

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() { }

  getAll() {
    return quotes;
  }
}
