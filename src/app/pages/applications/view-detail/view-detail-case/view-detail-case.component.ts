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
      plotNo: '3',
      domesticOrForeign: 'Domestic',
      foundations: 'red',
      overSite: 'green',
      fw: 'transparent',
      sw: 'green',
      superStructure: 'green',
      thermalInsulation: 'red',
      soundInsulation: 'darkorange',
      buildingService: 'transparent',
      accessibility: 'green',
      protection: 'green',
      fireSafety: 'red',
      general: 'darkorange',
      completion: 'darkorange',
      finalDefect: 'darkorange'
    },
    {
      plotNo: '4',
      domesticOrForeign: 'Domestic',
      foundations: 'transparent',
      overSite: 'darkorange',
      fw: 'green',
      sw: 'transparent',
      superStructure: 'green',
      thermalInsulation: 'red',
      soundInsulation: 'transparent',
      buildingService: 'darkorange',
      accessibility: 'green',
      protection: 'transparent',
      fireSafety: 'red',
      general: 'transparent',
      completion: 'darkorange',
      finalDefect: 'darkorange'
    },
    {
      plotNo: '5',
      domesticOrForeign: 'Domestic',
      foundations: 'transparent',
      overSite: 'darkorange',
      fw: 'green',
      sw: 'transparent',
      superStructure: 'green',
      thermalInsulation: 'darkorange',
      soundInsulation: 'transparent',
      buildingService: 'green',
      accessibility: 'transparent',
      protection: 'transparent',
      fireSafety: 'red',
      general: 'transparent',
      completion: 'darkorange',
      finalDefect: 'darkorange'
    },
    {
      plotNo: '6',
      domesticOrForeign: 'Domestic',
      foundations: 'transparent',
      overSite: 'transparent',
      fw: 'transparent',
      sw: 'transparent',
      superStructure: 'transparent',
      thermalInsulation: 'transparent',
      soundInsulation: 'transparent',
      buildingService: 'transparent',
      accessibility: 'transparent',
      protection: 'transparent',
      fireSafety: 'transparent',
      general: 'transparent',
      completion: 'darkorange',
      finalDefect: 'darkorange'
    },
    {
      plotNo: '7',
      domesticOrForeign: 'Domestic',
      foundations: 'transparent',
      overSite: 'transparent',
      fw: 'transparent',
      sw: 'transparent',
      superStructure: 'transparent',
      thermalInsulation: 'transparent',
      soundInsulation: 'transparent',
      buildingService: 'transparent',
      accessibility: 'transparent',
      protection: 'transparent',
      fireSafety: 'transparent',
      general: 'transparent',
      completion: 'darkorange',
      finalDefect: 'green'
    },
    {
      plotNo: '1',
      domesticOrForeign: 'Domestic',
      foundations: 'transparent',
      overSite: 'transparent',
      fw: 'transparent',
      sw: 'transparent',
      superStructure: 'transparent',
      thermalInsulation: 'transparent',
      soundInsulation: 'transparent',
      buildingService: 'transparent',
      accessibility: 'transparent',
      protection: 'transparent',
      fireSafety: 'transparent',
      general: 'transparent',
      completion: 'darkorange',
      finalDefect: 'darkorange'
    },
  ];

  selectedPlot = {
    plotNo: '1'
  };

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
