// console.log('main shuru');
import brandName, { cityList, siteName1 } from './data.js';
import { properties } from '../dom-practice/properties.js';

/* console.log(cityList);
console.log(brandName);
console.log(siteName1);
console.log(properties); */

/* const nums = [5, 3, 2];
const total = nums.reduce(function (acc, n){
  return acc + n
}, 100)
console.log(total); */

const orders = [
  { id: 1, status: 'paid' },
  { id: 2, status: 'pending' },
  { id: 3, status: 'paid' },
  { id: 4, status: 'failed' },
  { id: 5, status: 'paid' }
];
const objCount = {}
const orderCount = orders.reduce(function(acc, n){
  return objCount[acc.status] = (objCount[acc.status] ?? 0) + n
}, 0)

console.log(orderCount)

