const orderHistory = [
  {
    type: 'Book',
    name: '"Javascript for impatient programmers"',
    author: 'Rauschmayer, Dr. Axel',
    initialCost: '$31.55',
    finalCost: '$34.00',
    orderDate: 'August 4, 2020',
    deliveryDate: 'August 8, 2020',
    returnWindowClose: 'September 7, 2020',
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232'
  },
  {
    type: 'Book',
    name: '"The Timeless Way of Building"',
    author: 'Alexander, Christopher',
    initialCost: '$41.33',
    finalCost: '$44.53',
    orderDate: 'July 19, 2020',
    deliveryDate: 'July 20, 2020',
    returnWindowClose: 'August 19, 2020',
    shipTo: 'JS Masher',
    orderNumber: '113-9984268-1280257'
  },
  {
    type: 'Electronic',
    name: '"Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter"',
    author: 'N/A',
    initialCost: '$15.98',
    finalCost: '$17.22',
    orderDate: 'July 4, 2020',
    deliveryDate: 'July 7, 2020',
    returnWindowClose: 'August 5, 2020',
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409'
  },
  {
    type: ['Electronic', 'Book'],
    name: ['"GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)"', '"The Art of Sql"'],
    author: ['N/A', 'Faroult, Stephane'],
    initialCost: ['$94.95', '$33.99'],
    finalCost: '$138.93',
    orderDate: 'July 3, 2020',
    deliveryDate: 'July 5, 2020',
    returnWindowClose: 'August 4, 2020',
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248'
  }
];
