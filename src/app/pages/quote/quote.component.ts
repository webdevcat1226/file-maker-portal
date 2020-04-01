import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../core/services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  quotes:any;

  constructor(
    private quoteService: QuoteService
  ) { }

  ngOnInit(): void {
    this.quotes = this.quoteService.getAll();
  }

}
