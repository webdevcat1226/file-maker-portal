import * as Faker from 'faker';
import { ApplicationWarranty } from '../core/enums/application-warranty.enum';

export const applications = [{
  "id": "b69e65b7-3bc7-4861-9097-d5ddd0b19bb2",
  "name": "Test4",
  "address": "1 East Fen Common, Soham, CH75JH",
  "certificate": "No",
  "unresolvedAmendments": 1,
  "unresolvedHighlights": 14,
  "reviewedDocs": 0,
  "warranty": "Advantage",
  "inspector": "Will Jarvis"
}, {
  "id": "6b8037ad-5705-4407-b684-d4ae14e0d4f6",
  "name": "Concrete",
  "address": "328 Floy Overpass Apt. 140",
  "certificate": "Texas 24 hour",
  "unresolvedAmendments": 17,
  "unresolvedHighlights": 16,
  "reviewedDocs": 9,
  "warranty": "Disadvantage",
  "inspector": "Shirley Langworth"
}, {
  "id": "f7c40cad-0e81-4a73-ad79-28217cc59b03",
  "name": "Generic",
  "address": "24479 Luella Walk Apt. 100",
  "certificate": "Legacy Response",
  "unresolvedAmendments": 0,
  "unresolvedHighlights": 14,
  "reviewedDocs": 20,
  "warranty": "Disadvantage",
  "inspector": "Megane Auer"
}, {
  "id": "afc8d431-b603-4a7b-9664-bf71704418e1",
  "name": "open-source",
  "address": "353 Mante Inlet Apt. 715",
  "certificate": "Pants fuchsia",
  "unresolvedAmendments": 2,
  "unresolvedHighlights": 17,
  "reviewedDocs": 13,
  "warranty": "Advantage",
  "inspector": "Pearlie Leuschke"
}, {
  "id": "7781b51b-e128-4d81-8033-c3fdba2f31d4",
  "name": "Marshall Islands",
  "address": "2821 Ritchie Forge Apt. 516",
  "certificate": "Loan Account invoice",
  "unresolvedAmendments": 0,
  "unresolvedHighlights": 9,
  "reviewedDocs": 9,
  "warranty": "Advantage",
  "inspector": "Lambert Kilback"
}, {
  "id": "6555d987-74bc-4cb1-8d80-7ad6864e797a",
  "name": "Berkshire",
  "address": "371 Grover Crossing Suite 239",
  "certificate": "ROI cross-platform",
  "unresolvedAmendments": 7,
  "unresolvedHighlights": 5,
  "reviewedDocs": 11,
  "warranty": "Disadvantage",
  "inspector": "Macy Mitchell"
}, {
  "id": "162dfa8e-ebd8-46bf-b4d8-e5007fe5cc56",
  "name": "Total",
  "address": "13520 Nader Shoals Apt. 245",
  "certificate": "Checking Account",
  "unresolvedAmendments": 16,
  "unresolvedHighlights": 17,
  "reviewedDocs": 13,
  "warranty": "Disadvantage",
  "inspector": "Afton Lubowitz"
}];

function addingWarrantyColor(object) {
  object.forEach(element => {
    if (element.warranty == "Advantage") {
      element.warrantyColor = "lightgreen";
    } else {
      element.warrantyColor = "red"
    }
  });
}

addingWarrantyColor(applications);


export function generateFakeApplications(count: number) {
  const warranty = [ApplicationWarranty.Advantage, ApplicationWarranty.Disadvantage];
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: Faker.random.uuid(),
      name: Faker.random.word(),
      address: Faker.helpers.createCard().address.streetC,
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

