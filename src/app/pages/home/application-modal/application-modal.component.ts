import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-application-modal',
  templateUrl: './application-modal.component.html',
  styleUrls: ['./application-modal.component.scss']
})
export class ApplicationModalComponent implements OnInit {

  name = '';
  isChecked = false;

  constructor(
    public modal: NgbActiveModal
  ) {
  }

  ngOnInit(): void {
  }

  TermsAndConditionChange() {
    let element = <HTMLInputElement> document.getElementById("Terms_Conditions");
    this.isChecked = element.checked;
    console.log(this.isChecked);
  }
  getTermsAndConditionCheckboxStatus() {
    return this.isChecked;
  }
}
