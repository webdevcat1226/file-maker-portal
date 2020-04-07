import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '../../../../core/services/application.service';
import { AmendmentsService } from '../../../../core/services/amendments.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AmendmentsModalComponent } from '../amendments-modal/amendments-modal.component';

@Component({
  selector: 'app-view-detail-amendments',
  templateUrl: './view-detail-amendments.component.html',
  styleUrls: ['./view-detail-amendments.component.scss']
})
export class ViewDetailAmendmentsComponent implements OnInit {

  id: string;
  data: any;
  amendments = [];

  constructor(
    private route: ActivatedRoute,
    private applicationService: ApplicationService,
    private amendmentsService: AmendmentsService,
    private modal: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.parent.snapshot.params.id;
    this.data = this.applicationService.findById(this.id);
    this.amendments = this.amendmentsService.getAll();
  }

  openAmendmentsModal(item) {
    const modalRef = this.modal.open(AmendmentsModalComponent, { backdrop: 'static' });

    modalRef.result.then(res => {
      console.log(res);
    }, reason => {
      console.log(reason);
    });

    //sending selected amendment data to modal component
    modalRef.componentInstance.selectedAmendment = item;
  }
}
