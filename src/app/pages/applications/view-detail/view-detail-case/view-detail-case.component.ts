import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../../../core/services/application.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-detail-case',
  templateUrl: './view-detail-case.component.html',
  styleUrls: ['./view-detail-case.component.scss']
})
export class ViewDetailCaseComponent implements OnInit {

  id: string;
  data: any;
  plotData = [
    {
      plotNo: '1',
      domesticOrForeign: 'Domestic',
      foundations: 'red',
      overSite: 'darkorange',
      fw: 'darkorange',
      sw: 'green',
      superStructure: 'green',
      thermalInsulation: 'red',
      soundInsulation: 'darkorange',
      buildingService: 'darkorange',
      accessibility: 'green',
      protection: 'darkorange',
      fireSafety: 'red',
      general: 'darkorange',
      completion: 'darkorange',
      finalDefect: 'darkorange'
    },
    {
      plotNo: '2',
      domesticOrForeign: 'Domestic',
      foundations: 'green',
      overSite: 'darkorange',
      fw: 'darkorange',
      sw: 'darkorange',
      superStructure: 'green',
      thermalInsulation: 'red',
      soundInsulation: 'darkorange',
      buildingService: 'green',
      accessibility: 'green',
      protection: 'red',
      fireSafety: 'red',
      general: 'darkorange',
      completion: 'darkorange',
      finalDefect: 'darkorange'
    },
    {
      plotNo: '1',
      domesticOrForeign: 'Domestic',
      foundations: 'red',
      overSite: 'darkorange',
      fw: 'darkorange',
      sw: 'green',
      superStructure: 'green',
      thermalInsulation: 'red',
      soundInsulation: 'darkorange',
      buildingService: 'darkorange',
      accessibility: 'green',
      protection: 'darkorange',
      fireSafety: 'red',
      general: 'darkorange',
      completion: 'darkorange',
      finalDefect: 'darkorange'
    },
    {
      plotNo: '1',
      domesticOrForeign: 'Domestic',
      foundations: 'red',
      overSite: 'darkorange',
      fw: 'darkorange',
      sw: 'green',
      superStructure: 'green',
      thermalInsulation: 'red',
      soundInsulation: 'darkorange',
      buildingService: 'darkorange',
      accessibility: 'green',
      protection: 'darkorange',
      fireSafety: 'red',
      general: 'darkorange',
      completion: 'darkorange',
      finalDefect: 'darkorange'
    },
    {
      plotNo: '1',
      domesticOrForeign: 'Domestic',
      foundations: 'red',
      overSite: 'darkorange',
      fw: 'darkorange',
      sw: 'green',
      superStructure: 'green',
      thermalInsulation: 'red',
      soundInsulation: 'darkorange',
      buildingService: 'darkorange',
      accessibility: 'green',
      protection: 'darkorange',
      fireSafety: 'red',
      general: 'darkorange',
      completion: 'darkorange',
      finalDefect: 'darkorange'
    },
    {
      plotNo: '1',
      domesticOrForeign: 'Domestic',
      foundations: 'red',
      overSite: 'darkorange',
      fw: 'darkorange',
      sw: 'green',
      superStructure: 'green',
      thermalInsulation: 'red',
      soundInsulation: 'darkorange',
      buildingService: 'darkorange',
      accessibility: 'green',
      protection: 'darkorange',
      fireSafety: 'red',
      general: 'darkorange',
      completion: 'darkorange',
      finalDefect: 'darkorange'
    },
    {
      plotNo: '1',
      domesticOrForeign: 'Domestic',
      foundations: 'red',
      overSite: 'darkorange',
      fw: 'darkorange',
      sw: 'green',
      superStructure: 'green',
      thermalInsulation: 'red',
      soundInsulation: 'darkorange',
      buildingService: 'darkorange',
      accessibility: 'green',
      protection: 'darkorange',
      fireSafety: 'red',
      general: 'darkorange',
      completion: 'darkorange',
      finalDefect: 'darkorange'
    },
    {
      plotNo: '1',
      domesticOrForeign: 'Domestic',
      foundations: 'red',
      overSite: 'darkorange',
      fw: 'darkorange',
      sw: 'green',
      superStructure: 'green',
      thermalInsulation: 'red',
      soundInsulation: 'darkorange',
      buildingService: 'darkorange',
      accessibility: 'green',
      protection: 'darkorange',
      fireSafety: 'red',
      general: 'darkorange',
      completion: 'darkorange',
      finalDefect: 'darkorange'
    },
  ];

  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.parent.snapshot.params.id;
    this.data = this.applicationService.findById(this.id);
  }
}
