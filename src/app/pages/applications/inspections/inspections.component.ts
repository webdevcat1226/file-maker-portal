import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationService } from '../../../core/services/application.service';
import { InspectionModalComponent } from '../inspection-modal/inspection-modal.component';
import { InspectionsService } from '../../../core/services/inspections.service';

@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.scss']
})
export class InspectionsComponent implements OnInit {

  id: string;
  data: any;
  inspectionData = [];

  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute,
    private modal: NgbModal,
    private inspectionsService: InspectionsService
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.data = this.applicationService.findById(this.id);
    this.inspectionData = this.inspectionsService.getAll();
  }

  openInspectionModal() {
    const modalRef = this.modal.open(InspectionModalComponent, { backdrop: 'static' });
    modalRef.componentInstance.data = this.data;

    modalRef.result.then(res => {
      console.log(res);
    }, reason => {
      console.log(reason);
    });
  }
}
