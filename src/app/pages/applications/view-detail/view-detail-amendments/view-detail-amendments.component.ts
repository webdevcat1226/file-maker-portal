import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../../../core/services/application.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-detail-amendments',
  templateUrl: './view-detail-amendments.component.html',
  styleUrls: ['./view-detail-amendments.component.scss']
})
export class ViewDetailAmendmentsComponent implements OnInit {

  id: string;
  data: any;

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
