// console.log('main shuru');
import brandName, { cityList, siteName1 } from './data.js';
import { properties } from '../dom-practice/properties.js';
/* 
console.log(cityList);
console.log(brandName);
console.log(siteName1);
console.log(properties);
 */

/* const obj = { Noida: 5 };
const city = 'Noida';

console.log('line1', obj.city);
console.log('line2', obj[city]); */

/* const items = [
  {
    name: 'A',
    city: 'Noida',
  },
  {
    name: 'B',
    city: 'Gurgaon',
  },
  {
    name: 'C',
    city: 'Noida',
  },
  {
    name: 'D',
    city: 'Kolkata',
  },
  {
    name: 'E',
    city: 'Noida',
  },
];

const countObj = {};
for (const item of items) {
  countObj[item.city] = (countObj[item.city] ?? 0) + 1;
}
console.log(countObj); */

/* console.log(cityList);
console.log(brandName);
console.log(siteName1);
console.log(properties); */

/* const nums = [5, 3, 2];
const total = nums.reduce(function (acc, n){
  return acc + n
}, 100)
console.log(total); */


/* const statusCount = {};
for (const order of orders) {
  statusCount[order.status] = (statusCount[order.status] ?? 0) + 1;
  }
  console.log(statusCount); */
  
  /* const orders = [
    { id: 1, status: 'paid' },
    { id: 2, status: 'pending' },
    { id: 3, status: 'paid' },
    { id: 4, status: 'failed' },
    { id: 5, status: 'paid' },
  ];
  
const orderCount = orders.reduce((acc, n)=>{
  return [...acc, n.status]
},[]);
console.log(orderCount) */

  /* const orderCount = orders.reduce((acc, n) => {
  acc[n.status] = (acc[n.status] ?? 0)  + 1;
  acc[n.status]
  return acc
},{}) */

/* const nums = [5,3,2]
const total = nums.reduce(function (acc, n){
  return acc + n
},0)

console.log(total) */

const books = [
  { title: 'A', genre: 'fiction' },
  { title: 'B', genre: 'history' },
  { title: 'C', genre: 'fiction' },
  { title: 'D', genre: 'science' },
  { title: 'E', genre: 'history' },
  { title: 'F', genre: 'fiction' }
];

const allGenre = books.reduce(function (acc, n){
  acc[n.genre] = (acc[n.genre] ?? 0) + 1;
  return acc
},{})

console.log(allGenre);