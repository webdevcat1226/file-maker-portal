import * as Faker from 'faker';

export const inspectionData = [
  {
    id: '1',
    date_ts: 1586479696786,
    isBooked: false,
    terminal: 'Early',
    unknownNumber: 0,
    bookStatus: Faker.random.arrayElement(['Confirmed', 'Rejected']),
    bookDate: Faker.date.recent(),
    inspectionStatus: Faker.random.arrayElement(['Cancelled', 'Not available']),
    types: [
      'accessibility',
      'buliding-service',
      'fw',
      'protection'
    ],
    plots: [ 1, 3, 5, 7 ]
  },
  {
    id: '2',
    date_ts: 1586479696786,
    isBooked: true,
    terminal: '',
    unknownNumber: '',
    bookStatus: Faker.random.arrayElement(['Confirmed', 'Rejected']),
    bookDate: Faker.date.recent(),
    inspectionStatus: Faker.random.arrayElement(['Cancelled', 'Not available']),
    types: [
      'accessibility',
      'buliding-service',
      'fw',
      'protection'
    ],
    plots: [ 2, 4, 6, 8 ]
  },
  {
    id: '3',
    date_ts: 1586479696786,
    isBooked: false,
    terminal: 'Early',
    unknownNumber: '30',
    bookStatus: Faker.random.arrayElement(['Confirmed', 'Rejected']),
    bookDate: Faker.date.recent(),
    inspectionStatus: Faker.random.arrayElement(['Cancelled', 'Not available']),
    types: [
      'fire-safety',
      'foundation',
      'general',
      'oversite-dpc'
    ],
    plots: [ 2, 3, 4, 5 ]
  },
  {
    id: '4',
    date_ts: 1586479696786,
    isBooked: false,
    terminal: 'Don\'t Mind',
    unknownNumber: '30',
    bookStatus: Faker.random.arrayElement(['Confirmed', 'Rejected']),
    bookDate: Faker.date.recent(),
    inspectionStatus: Faker.random.arrayElement(['Cancelled', 'Not available']),
    types: [
      'protection',
      'sound-insulation',
      'super-structure',
      'sw',
      'termal-insulation'
    ],
    plots: [ 6, 7, 8 ]
  },
  {
    id: '5',
    date_ts: 1586479696786,
    isBooked: false,
    terminal: '',
    unknownNumber: '',
    bookStatus: Faker.random.arrayElement(['Confirmed', 'Rejected']),
    bookDate: Faker.date.recent(),
    inspectionStatus: Faker.random.arrayElement(['Cancelled', 'Not available']),
    types: [
      'completion',
      'fw',
      'super-structure'
    ],
    plots: [ 3 ]
  },
];

export const inspectionTypes = [
  { label: 'Accessibility', value: 'accessibility' },
  { label: 'Building Service', value: 'building-service' },
  { label: 'Completion', value: 'completion' },
  { label: 'Fire Safety', value: 'fire-safety' },
  { label: 'Foundation', value: 'foundation' },
  { label: 'FW', value: 'fw' },
  { label: 'General', value: 'general' },
  { label: 'Oversite DPC', value: 'oversite-dpc' },
  { label: 'Protection', value: 'protection' },
  { label: 'Sound Insulation', value: 'sound-insulation' },
  { label: 'Super Structure', value: 'super-structure' },
  { label: 'SW', value: 'sw' },
  { label: 'Thermal Insulation', value: 'thermal-insulation' },
];

export const plotTypes = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' }
];
