import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inspection-modal',
  templateUrl: './inspection-modal.component.html',
  styleUrls: ['./inspection-modal.component.scss']
})
export class InspectionModalComponent implements OnInit {

  data: any;

  constructor(
    public modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

}
