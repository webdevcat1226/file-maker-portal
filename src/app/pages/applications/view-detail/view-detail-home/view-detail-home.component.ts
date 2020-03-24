import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../../../core/services/application.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-detail-home',
  templateUrl: './view-detail-home.component.html',
  styleUrls: ['./view-detail-home.component.scss']
})
export class ViewDetailHomeComponent implements OnInit {

  id: string;
  data: any;

  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id =  this.route.parent.snapshot.params.id;
    this.data = this.applicationService.findById(this.id);
  }
}
