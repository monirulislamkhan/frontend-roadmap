// properties.js — shared practice data for Phase 1
// 18 properties. Reuse this file for every Month 1 practice task.
// Month 3 note: add `export` here once ES6 modules are covered.

const properties = [
  {
    id: 1,
    name: 'Skyline Towers',
    city: 'Noida',
    price: 3,
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
    price: 3,
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

const totalPrice = properties.reduce((sum, property) => sum + (property.price == null ? 0 : property.price), 0);
console.log(totalPrice);
