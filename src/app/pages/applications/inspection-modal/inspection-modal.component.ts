import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-inspection-modal',
  templateUrl: './inspection-modal.component.html',
  styleUrls: ['./inspection-modal.component.scss']
})
export class InspectionModalComponent implements OnInit {

  data: any;
  model: any;
  isPopoverVisible:any;

  contactInfo = [
    {
      linker: 'Will Jarvis',
      phone: '0752575165'
    },
    {
      linker: 'Design Team',
      phone: 'No Mobile Number'
    },
    {
      linker: 'Jerry Overhill',
      phone: 'No Mobile Number'
    }
  ];

  selectedLinker = null;

  constructor(
    public modal: NgbActiveModal
  ) {
  }

  ngOnInit(): void {
    this.isPopoverVisible = false;
  }

  selectLinker(data) {
    this.selectedLinker = data;
  }
}
