import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../../core/services/application.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inspections',
  templateUrl: './inspections.component.html',
  styleUrls: ['./inspections.component.scss']
})
export class InspectionsComponent implements OnInit {

  id: string;
  data: any;

  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.route.snapshot.params);
    this.data = this.applicationService.findById(this.id);
  }

}
