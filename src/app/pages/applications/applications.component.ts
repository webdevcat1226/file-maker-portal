import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../core/services/application.service';
// import { generateFakeApplications } from '../../_fake-db/applications';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  applicationsInfo = [];
  // data = generateFakeApplications(8);

  constructor(
    private applicationService: ApplicationService
  ) {

  }

  ngOnInit(): void {
    this.applicationsInfo = this.applicationService.getAll();
    // console.log(JSON.stringify(this.data));
  }

}
