import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-application-modal',
  templateUrl: './application-modal.component.html',
  styleUrls: ['./application-modal.component.scss']
})
export class ApplicationModalComponent implements OnInit {
  @Input() public application;
  public tempApplication: any;

  name = '';
  isChecked = false;

  constructor(
    public modal: NgbActiveModal
  ) {
  }

  ngOnInit(): void {
    this.tempApplication = Object.assign(this.application);
    console.log(this.tempApplication);
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
