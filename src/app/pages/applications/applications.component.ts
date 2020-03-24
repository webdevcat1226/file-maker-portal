import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../core/services/application.service';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  applicationsInfo = [];

  constructor(
    private applicationService: ApplicationService
  ) {

  }

  ngOnInit(): void {
    this.applicationsInfo = this.applicationService.getAll();
  }

}
