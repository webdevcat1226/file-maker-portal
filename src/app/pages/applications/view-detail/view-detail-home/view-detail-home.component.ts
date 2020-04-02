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

  userPhoto1: any = '/assets/background-images/cute rat.jpg';
  userPhoto2: any = '/assets/background-images/cute rat.jpg';

  constructor(
    private applicationService: ApplicationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id =  this.route.parent.snapshot.params.id;
    this.data = this.applicationService.findById(this.id);
    console.log(this.data);
  }

  handleFileInput1(files) {
    if (FileReader && files && files.length) {
      const fr = new FileReader();
      fr.onload = () => {
        this.userPhoto1 = fr.result;
      };
      fr.readAsDataURL(files[0]);
    }
  }

  handleFileInput2(files) {
    if (FileReader && files && files.length) {
      const fr = new FileReader();
      fr.onload = () => {
        this.userPhoto2 = fr.result;
      };
      fr.readAsDataURL(files[0]);
    }
  }
}
