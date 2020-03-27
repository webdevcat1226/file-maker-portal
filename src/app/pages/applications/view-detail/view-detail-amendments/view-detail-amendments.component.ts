import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../../../core/services/application.service';
import { ActivatedRoute } from '@angular/router';
import * as Faker from 'faker';

@Component({
  selector: 'app-view-detail-amendments',
  templateUrl: './view-detail-amendments.component.html',
  styleUrls: ['./view-detail-amendments.component.scss']
})
export class ViewDetailAmendmentsComponent implements OnInit {

  id: string;
  data: any;
  amendments = [
    {
      number: '1',
      character: 'A',
      serial: '74',
      content: 'Please provide Engineers design and calculations, upon receipt we will either check in house or pass to our checking engineer. Therefore further comments may follow.',
      isComplete: 'Yes',
      color: 'limegreen'
    },
    {
      number: '1',
      character: 'A',
      serial: '75',
      content: 'We appear to have received the structural design but in order to  carry out our structural check we also require the accompanying calculations.',
      isComplete: 'Yes',
      color: 'limegreen'
    },
    {
      number: '2',
      character: 'A',
      serial: '76',
      content: 'Due to the recent adverse publicity concerning breathable felts, it is suggested that additional ventilation is provided to avoid the risk of condensation in the roof.',
      isComplete: 'Yes',
      color: 'limegreen'
    },
    {
      number: '3',
      character: 'A',
      serial: '77',
      content: 'We appear to have received the structural design but in order to  carry out our structural check we also require the accompanying calculations.',
      isComplete: 'No',
      color: 'red'
    },
    {
      number: '1',
      character: 'A',
      serial: '74',
      content: 'Please provide Engineers design and calculations, upon receipt we will either check in house or pass to our checking engineer. Therefore further comments may follow.',
      isComplete: 'Yes',
      color: 'limegreen'
    },
    {
      number: '1',
      character: 'A',
      serial: '75',
      content: 'We appear to have received the structural design but in order to  carry out our structural check we also require the accompanying calculations.',
      isComplete: 'Yes',
      color: 'limegreen'
    },
    {
      number: '2',
      character: 'A',
      serial: '76',
      content: 'Due to the recent adverse publicity concerning breathable felts, it is suggested that additional ventilation is provided to avoid the risk of condensation in the roof.',
      isComplete: 'Yes',
      color: 'limegreen'
    },
    {
      number: '3',
      character: 'A',
      serial: '77',
      content: 'We appear to have received the structural design but in order to  carry out our structural check we also require the accompanying calculations.',
      isComplete: 'No',
      color: 'red'
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
