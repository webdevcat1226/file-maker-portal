import { Component, OnInit, ViewChild } from '@angular/core';
import { ApplicationService } from '../../../../core/services/application.service';
import { ActivatedRoute } from '@angular/router';
import * as Faker from 'faker';


@Component({
  selector: 'app-view-detail-case',
  templateUrl: './view-detail-case.component.html',
  styleUrls: ['./view-detail-case.component.scss']
})

export class ViewDetailCaseComponent implements OnInit {

  @ViewChild('plotNumber') plotNum;

  id: string;
  applicationData: any;

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
      plotNo: '8',
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

  selectedPlotInfo = null; // red circle info of selected plot
  keys = [];
  filteredKeys = [];
  filteredPlotInfo = [];
  filteredCircleColor = [];

  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.parent.snapshot.params.id;
    this.applicationData = this.applicationService.findById(this.id);
  }

  sendPlotInfo(data) {
    this.filteredKeys = [];
    this.filteredPlotInfo = [];
    this.selectedPlotInfo = data;
    this.keys = Object.keys(this.selectedPlotInfo).map(key => key);
    this.keys.forEach(key => {
      if (this.selectedPlotInfo[key] == 'red' || this.selectedPlotInfo[key] == 'darkorange' || this.selectedPlotInfo[key] == 'green') {
        this.filteredKeys.push(key);
        this.filteredCircleColor[key] = this.selectedPlotInfo[key];
      }
    });
    this.setFilteredPlotInfo(this.filteredKeys, data, this.filteredCircleColor);
    console.log(this.filteredPlotInfo);
  }

  setFilteredPlotInfo(keys, data,circleColor) {
    keys.forEach(key => {
      let object = {
        color: circleColor[key],
        plotNo: data.plotNo,
        inspectionType: '',
        inspectionDate: '20/02/2020',
        highlight: '',
        resolutionRemark: 'None',
      };
      switch (key) {
        case 'foundations': {
          object.inspectionType = 'Foundations';
          object.highlight = Faker.random.words(3);
          break;
        }
        case 'overSite': {
          object.inspectionType = 'Oversite & DPC';
          object.highlight = Faker.random.words(3);
          break;
        }
        case 'fw': {
          object.inspectionType = 'FW';
          object.highlight = Faker.random.words(3);
          break;
        }
        case 'sw': {
          object.inspectionType = 'SW';
          object.highlight = Faker.random.words(3);
          break;
        }
        case 'superStructure': {
          object.inspectionType = 'Super Structure';
          object.highlight = Faker.random.words(3);
          break;
        }
        case 'thermalInsulation': {
          object.inspectionType = 'Thermal Insulation';
          object.highlight = Faker.random.words(3);
          break;
        }
        case 'soundInsulation': {
          object.inspectionType = 'Sound Insulation';
          object.highlight = Faker.random.words(3);
          break;
        }
        case 'buildingService': {
          object.inspectionType = 'Building Services';
          object.highlight = Faker.random.words(3);
          break;
        }
        case 'accessibility': {
          object.inspectionType = 'Accessibility';
          object.highlight = Faker.random.words(3);
          break;
        }
        case 'protection': {
          object.inspectionType = 'Protection';
          object.highlight = Faker.random.words(3);
          break;
        }
        case 'fireSafety': {
          object.inspectionType = 'Fire Safety';
          object.highlight = 'fire safety';
          break;
        }
        case 'general': {
          object.inspectionType = 'General';
          object.highlight = Faker.random.words(3);
          break;
        }
        case 'completion': {
          object.inspectionType = 'Completion';
          object.highlight = Faker.random.words(3);
          break;
        }
        case 'finalDefect': {
          object.inspectionType = 'Final Defect';
          object.highlight = Faker.random.words(3);
          break;
        }
        default: {
          break;
        }
      }
      this.filteredPlotInfo.push(object);
    })
  }
}
