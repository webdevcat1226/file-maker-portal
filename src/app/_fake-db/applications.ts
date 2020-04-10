import * as Faker from 'faker';
import { ApplicationWarranty } from '../core/enums/application-warranty.enum';

export const applications = [{
  'id': '6fa7acde-0e2d-44a1-9ac9-2b03e0b34e48',
  'commencementDate': '2020-03-23T17:11:20.710Z',
  'phoneNumber': '752-575-1653',
  'userEmail': 'Dovie0@gmail.com',
  'customerRef': '123456789',
  'applicationName': 'Test4',
  'worksAddress': '1 East Fen Common, Soham, CH75JH',
  'certificate': 'No',
  'unresolvedAmendments': 1,
  'unresolvedHighlights': 14,
  'reviewedDocs': 0,
  'warranty': 'Advantage',
  'inspector': 'Will Jarvis'
}, {
  'id': '5e237b63-5e48-42a2-bd72-efff87475a46',
  'commencementDate': '2020-03-24T05:54:11.627Z',
  'phoneNumber': '950-300-4047',
  'userEmail': 'Marilou59@yahoo.com',
  'customerRef': '123456789',
  'applicationName': 'online',
  'worksAddress': '037 Markus Circles Suite 706',
  'certificate': 'matrix Pike',
  'unresolvedAmendments': 8,
  'unresolvedHighlights': 4,
  'reviewedDocs': 17,
  'warranty': 'Advantage',
  'inspector': 'Yasmin Hickle'
}, {
  'id': '598bf6f0-09b4-4560-b13d-c3ec21a906e0',
  'commencementDate': '2020-03-24T00:27:28.558Z',
  'phoneNumber': '986-871-2020',
  'userEmail': 'Lonie_Cummings@gmail.com',
  'customerRef': '123456789',
  'applicationName': 'visualize',
  'worksAddress': '4594 Abigail Stream Apt. 872',
  'certificate': 'tan Cambridgeshire',
  'unresolvedAmendments': 13,
  'unresolvedHighlights': 17,
  'reviewedDocs': 0,
  'warranty': 'Disadvantage',
  'inspector': 'Dejon Osinski'
}, {
  'id': 'fbcc9611-11d9-4201-8dfd-ce753d0c4297',
  'commencementDate': '2020-03-24T06:54:38.228Z',
  'phoneNumber': '698-520-4071',
  'userEmail': 'Clemens.Halvorson@hotmail.com',
  'customerRef': '123456789',
  'applicationName': 'Fiji',
  'worksAddress': '382 Wisozk Tunnel Suite 629',
  'certificate': 'Bedfordshire ADP',
  'unresolvedAmendments': 0,
  'unresolvedHighlights': 13,
  'reviewedDocs': 13,
  'warranty': 'Disadvantage',
  'inspector': 'Amparo O\'Hara'
}, {
  'id': 'bfe1f839-1652-46f9-bc7f-9d0e63dd9648',
  'commencementDate': '2020-03-24T12:38:49.775Z',
  'phoneNumber': '483-211-3786',
  'userEmail': 'Jewell.Corwin@gmail.com',
  'customerRef': '123456789',
  'applicationName': 'Supervisor',
  'worksAddress': '09723 Jeremie Brooks Apt. 582',
  'certificate': 'cross-platform hacking',
  'unresolvedAmendments': 9,
  'unresolvedHighlights': 17,
  'reviewedDocs': 12,
  'warranty': 'Disadvantage',
  'inspector': 'Lelah Cremin'
}, {
  'id': '4eab8de4-9daf-4dca-a023-9410987c02c2',
  'commencementDate': '2020-03-24T15:44:09.552Z',
  'phoneNumber': '867-762-7329',
  'userEmail': 'Willard.Doyle77@hotmail.com',
  'customerRef': '123456789',
  'applicationName': 'hack',
  'worksAddress': '46183 Kris Islands Apt. 995',
  'certificate': 'backing up Cheese',
  'unresolvedAmendments': 1,
  'unresolvedHighlights': 20,
  'reviewedDocs': 0,
  'warranty': 'Disadvantage',
  'inspector': 'Makenzie Schneider'
}, {
  'id': '8674e8b0-485f-4f6b-a1ee-01b3eaec2b46',
  'commencementDate': '2020-03-24T03:44:04.651Z',
  'phoneNumber': '541-889-8659',
  'userEmail': 'Jimmie.Eichmann99@yahoo.com',
  'customerRef': '123456789',
  'applicationName': 'leverage',
  'worksAddress': '39792 Raynor Centers Apt. 742',
  'certificate': 'Buckinghamshire Intelligent Fresh Shirt',
  'unresolvedAmendments': 14,
  'unresolvedHighlights': 6,
  'reviewedDocs': 0,
  'warranty': 'Advantage',
  'inspector': 'Dakota Howell'
}, {
  'id': '7d5ae8a5-3419-4f59-a9c9-2bea151e5909',
  'commencementDate': '2020-03-24T07:46:58.519Z',
  'phoneNumber': '184-826-0936',
  'userEmail': 'Micaela.Schinner@hotmail.com',
  'customerRef': '123456789',
  'applicationName': 'Morocco',
  'worksAddress': '169 Leanna Forest Apt. 679',
  'certificate': 'Motorway Frozen',
  'unresolvedAmendments': 18,
  'unresolvedHighlights': 6,
  'reviewedDocs': 12,
  'warranty': 'Disadvantage',
  'inspector': 'Norval Monahan'
}];

function generateEmail(fullName) {
  const lastName = fullName.split(' ')[1];
  const num = Faker.random.number({ min: 1901, max: 2012 }).toString() + Faker.random.number({
    min: 1,
    max: 28
  }).toString();
  const domain = Faker.random.words(1).toLowerCase();
  return lastName + num + '@' + domain + '.com';
}

function addingDynamicValues(object) {
  object.forEach(element => {
    if (element.warranty === 'Advantage') {
      element.warrantyColor = 'limegreen';
    } else {
      element.warrantyColor = 'orangered';
    }

    element.applicantEmail = generateEmail(element.inspector);
  });
}

addingDynamicValues(applications);


export function generateFakeApplications(count: number) {
  const warranty = [ApplicationWarranty.Advantage, ApplicationWarranty.Disadvantage];
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: Faker.random.uuid(),
      commencementDate: Faker.date.recent(),
      phoneNumber: Faker.phone.phoneNumberFormat(),
      userEmail: Faker.internet.email(),
      applicationName: Faker.random.word(),
      worksAddress: Faker.helpers.createCard().address.streetC,
      certificate: Faker.random.words(2),
      unresolvedAmendments: Faker.random.number(20),
      unresolvedHighlights: Faker.random.number(20),
      reviewedDocs: Faker.random.number(20),
      warranty: warranty[Faker.random.number(1)],
      inspector: Faker.name.firstName() + ' ' + Faker.name.lastName()
    });
  }
  return data;
}
