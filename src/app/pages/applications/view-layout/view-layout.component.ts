import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../../core/services/application.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-layout',
  templateUrl: './view-layout.component.html',
  styleUrls: ['./view-layout.component.scss']
})
export class ViewLayoutComponent implements OnInit {

  menu = [
    {label: 'File Home', route: '/home', icon: 'icon-home'},
    {label: 'Case Sheet', route: '/case', icon: 'icon-map'},
    {label: 'Amendments', route: '/amendments', icon: 'icon-grid'}
  ];

  id: string;
  data: any;

  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    // this.route.firstChild.params.subscribe(params => {
    //   this.id = params.id;
    //   this.data = this.applicationService.findById(this.id);
    // });

    this.id = this.route.firstChild.snapshot.params.id;
    this.data = this.applicationService.findById(this.id);
  }

}
