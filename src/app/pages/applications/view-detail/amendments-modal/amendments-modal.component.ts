import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-amendments-modal',
  templateUrl: './amendments-modal.component.html',
  styleUrls: ['./amendments-modal.component.scss']
})

export class AmendmentsModalComponent implements OnInit {

  @Input() public selectedAmendment;

  previousUploadedEvidences = [
    { isChecked: true },
    { isChecked: false },
    { isChecked: true },
    { isChecked: false },
    { isChecked: false },
    { isChecked: true },
  ];

  constructor(
    public modal: NgbActiveModal
  ) {
  }

  ngOnInit(): void {
    console.log("selected amendment is ", this.selectedAmendment);
  }

}
