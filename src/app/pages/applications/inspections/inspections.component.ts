import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationService } from '../../../core/services/application.service';
import { InspectionModalComponent } from '../inspection-modal/inspection-modal.component';

@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.scss']
})
export class InspectionsComponent implements OnInit {

  id: string;
  data: any;
  inspectionData = [
    {
      date: 'Monday, 02 March 2020',
      isBooked: 'No',
      terminal: 'Early',
      unknownNumber: 0,
      bookingStatus: 'Confirmed 3/2/2020 10:17 AM',
      inspectionStatus: 'Cancelled',
      accessibility: false,
      buildingService: false,
      completion: false,
      fireSafety: true,
      foundation: false,
      fw: false,
      general: false,
      oversiteDpc: false,
      protection: false,
      soundInsulation: false,
      superStructure: false,
      sw: false,
      thermalInsulation:false,
      firstPlot: true,
      secondPlot: false,
      thirdPlot: false,
      fourthPlot: false,
      fifthPlot: false,
      sixthPlot: false,
      seventhPlot: false,
      eighthPlot: false
    },
    {
      date: 'Thursday, 23 January 2020',
      isBooked: 'Yes',
      terminal: '',
      unknownNumber: '',
      bookingStatus: 'Confirmed 1/22/2020 1:12 PM',
      inspectionStatus: 'Cancelled',
      accessibility: false,
      buildingService: true,
      completion: true,
      fireSafety: false,
      foundation: false,
      fw: false,
      general: false,
      oversiteDpc: false,
      protection: false,
      soundInsulation: false,
      superStructure: false,
      sw: false,
      thermalInsulation:false,
      firstPlot: false,
      secondPlot: false,
      thirdPlot: true,
      fourthPlot: false,
      fifthPlot: false,
      sixthPlot: false,
      seventhPlot: false,
      eighthPlot: false
    },
    {
      date: 'Thursday, 23 January 2020',
      isBooked: 'No',
      terminal: 'Early',
      unknownNumber: '30',
      bookingStatus: 'Confirmed 1/22/2020 3:37 PM',
      inspectionStatus: 'Not Available',
      accessibility: true,
      buildingService: true,
      completion: false,
      fireSafety: false,
      foundation: false,
      fw: false,
      general: false,
      oversiteDpc: false,
      protection: false,
      soundInsulation: false,
      superStructure: false,
      sw: false,
      thermalInsulation:false,
      firstPlot: false,
      secondPlot: false,
      thirdPlot: true,
      fourthPlot: false,
      fifthPlot: false,
      sixthPlot: false,
      seventhPlot: false,
      eighthPlot: false
    },
    {
      date: 'Wednesday, 22 January 2020',
      isBooked: 'No',
      terminal: "Don't Mind",
      unknownNumber: '30',
      bookingStatus: 'Confirmed 1/22/2020 7:47:53 AM',
      inspectionStatus: 'Cancelled',
      accessibility: false,
      buildingService: true,
      completion: false,
      fireSafety: false,
      foundation: false,
      fw: false,
      general: false,
      oversiteDpc: false,
      protection: false,
      soundInsulation: false,
      superStructure: false,
      sw: false,
      thermalInsulation:false,
      firstPlot: false,
      secondPlot: false,
      thirdPlot: true,
      fourthPlot: false,
      fifthPlot: false,
      sixthPlot: false,
      seventhPlot: false,
      eighthPlot: false
    },
    {
      date: '',
      isBooked: 'No',
      terminal: "",
      unknownNumber: '',
      bookingStatus: 'Unsubmitted',
      inspectionStatus: 'Not Available',
      accessibility: false,
      buildingService: false,
      completion: false,
      fireSafety: false,
      foundation: false,
      fw: false,
      general: false,
      oversiteDpc: false,
      protection: false,
      soundInsulation: false,
      superStructure: false,
      sw: false,
      thermalInsulation:false,
      firstPlot: false,
      secondPlot: false,
      thirdPlot: false,
      fourthPlot: false,
      fifthPlot: false,
      sixthPlot: false,
      seventhPlot: false,
      eighthPlot: false
    },
  ];

  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute,
    private modal: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.data = this.applicationService.findById(this.id);
    this.inspectionData['inspector'] = this.data['inspector'];
    console.log(this.data['inspector']);
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
