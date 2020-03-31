import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-application-modal',
  templateUrl: './application-modal.component.html',
  styleUrls: ['./application-modal.component.scss']
})
export class ApplicationModalComponent implements OnInit {

  constructor(
    public modal: NgbActiveModal
  ) {
  }

  ngOnInit(): void {
  }
}
