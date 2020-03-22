import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  myAccountInfo = {
    name: "Satan Leo",
    email: "leosatan1226@gmail.com",
    phone: "15702323446",
    accountType: "Agent"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
