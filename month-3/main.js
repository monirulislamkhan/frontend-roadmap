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

/* const allGenre = books.reduce(function (acc, n){
  // acc[n.genre] = (acc[n.genre] ?? 0) + 1;
  return [...acc, n.genre]
},[]) */

// console.log(genreSet, genreSet.size);
// console.log(allGenre);

//Concept: Set
/* const genres = ['fiction', 'history', 'fiction', 'science'];
const uniqe = new Set(genres);
console.log(typeof uniqe, uniqe.size)
console.log(genres)

const revert = [...uniqe].map(item => item);
console.log(revert) */
/* const nums = [1, 2, 2, 3, 3, 3];
const s = new Set(nums);
console.log(s.size) */

/* const genreMap = books.map(item => item.genre);
const genreSet = new Set(genreMap)
console.log(genreSet) */

/* const uniqeGenres = [...new Set(books.map(item => item.genre))].sort();
console.log(uniqeGenres) */


/* const s = new Set(['fiction', 'history', 'science']);
console.log(s.sort());
console.log([...s]); */


/* console.log(['science', 'fiction', 'history'].sort((a, b) => a - b)); */

/* console.log([10, 9, 100, 1].sort());
console.log([10, 9, 100, 1].sort((a, b)=> a - b)); */

/* console.log(['banana', 'Apple', 'cherry'].sort());
console.log(['banana', 'Apple', 'cherry'].sort((a, b) => a.localeCompare(b))); */

/* console.log(['apple', 'Banana', 'cherry'].sort());
console.log(['apple', 'Banana', 'cherry'].sort((a, b) => a.localeCompare(b))); */

// concept :flat
/* const tags = [['php', 'css'], ['js'], ['html', 'scss']];
console.log(tags.flat().length); */



/* localStorage.setItem('user', JSON.stringify({name: "Project Name", city:"Noida"}));
console.log(JSON.parse(localStorage.getItem('user'))); */

/* const settings = {theme:'dark', fontSize:16};
const asText = JSON.stringify(settings);
localStorage.setItem('settings', asText);

const textBack = localStorage.getItem('settings');
const backToObject = JSON.parse(textBack)
console.log(backToObject) */

/* localStorage.setItem('user', JSON.stringify({name: "Monirul", city:'Noida'}));
console.log(JSON.parse(localStorage.getItem('user'))); */

/* console.log(localStorage.getItem('koi-aisi-key-jo-hai-hi-nahi'));
const saved = localStorage.getItem('koi-aisi-key-jo-hai-hi-nahi');
console.log(JSON.parse(saved)); */
/* localStorage.setItem('hell', JSON.stringify('Hello world'));
const bad = JSON.parse(localStorage.getItem('hell'));
console.log(bad) */

/* const items = ['b', 'a', 'c'];
const sorted = items.sort();
console.log(items === sorted)
console.log(items) */

/* const list = [1, 2, 3];
console.log(list.map(n => n * 2))
console.log(list.map(n => {return n * 2}))
console.log(list.map(n => {n * 2}))
console.log(list.map(n => ({val:n}))) */

/* console.log(JSON.stringify({ a: 1, b: undefined, c: null }));

console.log(JSON.stringify({ price: null }), JSON.stringify({ price: undefined })); */

/* function handleSave(n){
  console.log('chala, n=', n);
}

const btn = document.querySelector('#theme');
btn.addEventListener('click', () => handleSave(5)) */