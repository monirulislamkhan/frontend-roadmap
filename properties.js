// properties.js — shared practice data for Phase 1
// 18 properties. Reuse this file for every Month 1 practice task.
// Month 3 note: add `export` here once ES6 modules are covered.

const properties = [
  {
    id: 1,
    name: 'Skyline Towers',
    city: 'Noida',
    price: 7500000,
    bhk: 3,
    area: 1450,
    type: 'apartment',
    status: 'sale',
    postedOn: '2026-07-12',
    photos: ['a.jpg', 'b.jpg', 'c.jpg'],
    agent: { name: 'Rahul Verma', phone: '9810011111' },
  },
  {
    id: 2,
    name: 'Green Valley Residency',
    city: 'Gurgaon',
    price: 4200000,
    bhk: 2,
    area: 980,
    type: 'apartment',
    status: 'sale',
    postedOn: '2026-06-28',
    photos: ['a.jpg'],
    agent: { name: 'Sneha Kapoor', phone: '9810022222' },
  },
  {
    id: 3,
    name: 'Plot 42, Sector 62',
    city: 'Ghaziabad',
    price: 0,
    bhk: 0,
    area: 2000,
    type: 'plot',
    status: 'sale',
    postedOn: '2026-07-01',
    photos: [],
    agent: null,
  },
  {
    id: 4,
    name: 'Villa 9, Palm Grove',
    city: 'Noida',
    price: null,
    bhk: 4,
    area: 3200,
    type: 'villa',
    status: 'sale',
    postedOn: '2026-05-19',
    photos: ['a.jpg', 'b.jpg'],
    agent: { name: 'Imran Sheikh', phone: '9810033333' },
  },
  {
    id: 5,
    name: 'Shop 3, Main Market',
    city: 'Delhi',
    bhk: 0,
    area: 420,
    type: 'shop',
    status: 'rent',
    postedOn: '2026-07-20',
    photos: ['a.jpg'],
    agent: { name: 'Rahul Verma', phone: '9810011111' },
  },
  {
    id: 6,
    name: 'Lotus Enclave',
    city: 'Noida',
    price: 12500000,
    bhk: 3,
    area: 1750,
    type: 'apartment',
    status: 'sale',
    postedOn: '2026-04-08',
    photos: ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg'],
    agent: { name: 'Sneha Kapoor', phone: '9810022222' },
  },
  {
    id: 7,
    name: 'Maple Heights',
    city: 'Gurgaon',
    price: 25000000,
    bhk: 4,
    area: 2600,
    type: 'apartment',
    status: 'sale',
    postedOn: '2026-07-25',
    photos: ['a.jpg', 'b.jpg'],
    agent: { name: 'Priya Nair', phone: '9810044444' },
  },
  {
    id: 8,
    name: 'Sunrise Apartments',
    city: 'Ghaziabad',
    price: 3800000,
    bhk: 2,
    area: 900,
    type: 'apartment',
    status: 'rent',
    postedOn: '2026-06-11',
    photos: [],
    agent: { name: 'Imran Sheikh', phone: '9810033333' },
  },
  {
    id: 9,
    name: 'Sky Villa, DLF Phase 2',
    city: 'Gurgaon',
    price: 48000000,
    bhk: 5,
    area: 4100,
    type: 'villa',
    status: 'sale',
    postedOn: '2026-03-30',
    photos: ['a.jpg', 'b.jpg', 'c.jpg'],
    agent: { name: 'Priya Nair', phone: '9810044444' },
  },
  {
    id: 10,
    name: 'Rose Court',
    city: 'Noida',
    price: 6200000,
    bhk: 2,
    area: 1100,
    type: 'apartment',
    status: 'sale',
    postedOn: '2026-07-18',
    photos: ['a.jpg'],
    agent: { name: 'Rahul Verma', phone: '9810011111' },
  },
  {
    id: 11,
    name: 'Office Suite 210',
    city: 'Delhi',
    price: 9500000,
    bhk: 0,
    area: 780,
    type: 'office',
    status: 'sale',
    postedOn: '2026-05-02',
    photos: ['a.jpg', 'b.jpg'],
    agent: null,
  },
  {
    id: 12,
    name: 'Ganga Apartments',
    city: 'Ghaziabad',
    price: 4500000,
    bhk: 3,
    area: 1250,
    type: 'apartment',
    status: 'sale',
    postedOn: '2026-06-05',
    photos: ['a.jpg'],
    agent: { name: 'Sneha Kapoor', phone: '9810022222' },
  },
  {
    id: 13,
    name: 'Corner Plot, Sector 12',
    city: 'Noida',
    price: 15000000,
    bhk: 0,
    area: 3000,
    type: 'plot',
    status: 'sale',
    postedOn: '2026-07-29',
    photos: [],
    agent: { name: 'Imran Sheikh', phone: '9810033333' },
  },
  {
    id: 14,
    name: 'Silver Oak Floors',
    city: 'Gurgaon',
    price: 8900000,
    bhk: 3,
    area: 1600,
    type: 'builder floor',
    status: 'sale',
    postedOn: '2026-02-14',
    photos: ['a.jpg', 'b.jpg', 'c.jpg'],
    agent: { name: 'Priya Nair', phone: '9810044444' },
  },
  {
    id: 15,
    name: 'Studio 7, Sector 137',
    city: 'Noida',
    price: 2800000,
    bhk: 1,
    area: 520,
    type: 'apartment',
    status: 'rent',
    postedOn: '2026-07-30',
    photos: ['a.jpg'],
    agent: { name: 'Rahul Verma', phone: '9810011111' },
  },
  {
    id: 16,
    name: 'Heritage Bungalow',
    city: 'Delhi',
    price: 62000000,
    bhk: 6,
    area: 5200,
    type: 'villa',
    status: 'sale',
    postedOn: '2026-01-22',
    photos: ['a.jpg', 'b.jpg'],
    agent: { name: 'Priya Nair', phone: '9810044444' },
  },
  {
    id: 17,
    name: 'Amrapali Zodiac',
    city: 'Noida',
    price: 5400000,
    bhk: 2,
    area: 1050,
    type: 'apartment',
    status: 'rent',
    postedOn: '2026-06-19',
    photos: [],
    agent: { name: 'Sneha Kapoor', phone: '9810022222' },
  },
  {
    id: 18,
    name: 'Warehouse Unit 4',
    city: 'Ghaziabad',
    price: 11000000,
    bhk: 0,
    area: 6500,
    type: 'warehouse',
    status: 'sale',
    postedOn: '2026-04-27',
    photos: ['a.jpg'],
    agent: null,
  },
];

function priceLabel(property) {
  const lakhs = 100000;
  const cr = 10000000;

  if (property.price === 0) {
    return 'Free Property';
  }

  if (property.price == null) {
    return 'Price on request';
  }

  let finalPrice;
  if (property.price >= cr) {
    finalPrice = `${(property.price / cr).toFixed(2)} Cr`;
  } else {
    finalPrice = `${(property.price / lakhs).toFixed(2)} L`;
  }

  return `₹ ${finalPrice}`;
}

// for (const property of properties){
//   // console.log(property.name, priceLabel(property))
// }

// const property = {name:"Skyline Towers", price:7500000 }
// const copy = property;
// copy.price = 9000000;
// console.log(property.price);

const objList = [
  { id: 1, name: 'Skyline' },
  { id: 2, name: 'Rose Court' },
];
const mappedList = objList.filter((item) => item && item.id);
// console.log(mappedList);

const list = [{ id: 1, name: 'Skyline' }, null, { name: 'No ID' }, { id: 0, name: 'Plot 42' }];

// console.log(list.filter(item => item  !=null && item.id != null));

const property = { name: 'Skyline Towers', price: 7500000, bhk: 3 };

function applyDiscount(property, percent) {
  const newPrice = property.price - (property.price * percent) / 100;
  return { ...property, price: newPrice };
}

// console.log(applyDiscount(property, 10));
// console.log(property)

/* for (const property of properties) {
  const printResult = `${property.bhk > 0 ? property.bhk + ' BHK' : property.type[0].toUpperCase() + property.type.slice(1)} in ${property.city} - ${priceLabel(property)}`;
  // console.log(printResult);
} */

// const p = properties[0];
// console.log(p)
// console.log(typeof p.name)
// console.log(typeof p.price)
// console.log(typeof p.photos)
// console.log(typeof p.agent)

// const noida = properties.filter((item) => item.city === 'Noida').map((item) => item.name);
// const noida = properties.filter((item) => item.city === 'Noida').map((item) => item.name);
// console.log(noida);

/* const modifyProperties = properties.filter((item) => item.city === 'Noida').map((item) => priceLabel(item));

console.log(modifyProperties); */
/* const p = properties.find((p) => p.id === 13)?.name;
const p1 = properties.find((p) => p?.city === 'Mumbai');
console.log(p);
console.log(p1 ?? 'Not found'); */

/* const totalPrice = properties.reduce((sum, property) => sum + (property.price == null ? 0 : property.price), 0);
const totalPriceShort = properties.reduce((sum, property) => sum + (property.price ?? 0), 0);
console.log(totalPrice);
console.log(totalPriceShort); */

const prices = [7500000, 4200000, 25000000, 950000];
// console.log(prices.sort());
console.log(prices.sort());
