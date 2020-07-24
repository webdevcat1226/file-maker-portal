import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  myAccountInfo = {
    name: 'Satan Leo',
    email: 'leosatan1226@gmail.com',
    phone: '15702323446',
    accountType: 'Agent'
  };

  colleagueInfo = [
    {
      name: 'Will Javis',
      email: 'will@rhbclimited.co.uk',
      contact: 'Contact6930',
      info: 'information about this colleague is here'
    },
    {
      name: 'Design Team',
      email: 'designteam@coel.uk.com',
      contact: 'Contact7096',
      info: 'information about this colleague is here'
    },
    {
      name: 'Jerry Overhill',
      email: 'jerry@coel.uk.com',
      contact: 'Contact7097',
      info: 'information about this colleague is here'
    },
    {
      name: 'Karolina Zielinska',
      email: 'Karolina@coel.uk.com',
      contact: 'Contact7098',
      info: 'information about this colleague is here'
    },
    {
      name: 'Megan Moir',
      email: 'Megan.Moir@coel.uk.com',
      contact: 'Contact7099',
      info: 'information about this colleague is here'
    },
    {
      name: 'Greta Miceviciute',
      email: 'greta@coel.uk.com',
      contact: 'Contact7100',
      info: 'information about this colleague is here'
    },
    {
      name: 'Gemma Noakes',
      email: 'Gemma.Noakes@coel.uk.com',
      contact: 'Contact7101',
      info: 'information about this colleague is here'
    },
    {
      name: 'Barnaby Clark',
      email: 'barnaby@coel.com',
      contact: 'Contact7102',
      info: 'information about this colleague is here'
    }
  ];

  myCompanyInfo = {
    companyName: 'COEL',
    address1: '173 Street',
    address2: 'Chesterton',
    address3: 'Cambridge',
    address4: 'CB41NL'
  };
  constructor() {
  }

  ngOnInit(): void {
  }

}
