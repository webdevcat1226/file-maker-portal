import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss']
})
export class InlineEditComponent implements OnInit {

  @Input() value;

  temp = '';
  editing = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    this.editing = true;
    this.temp = this.value;
  }

  onSave() {
    this.value = this.temp;
    this.editing = false;
  }

  onCancel() {
    this.editing = false;
    this.temp = '';
  }

}
