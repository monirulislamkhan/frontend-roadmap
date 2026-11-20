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

/* const nested = [1, 2, [3,4], [5, 6]];
console.log(nested.flat()) */

/* const deep = [1, [2, [3, [4]]]]
console.log(deep.flat())
console.log(deep.flat(2))
console.log(deep.flat(Infinity)) */

/* const tags = [['php', 'css'], ['js'], ['html', 'scss']];
console.log(tags.flat().length); */

const posts = [
  { title: 'A', tags: ['php', 'css'] },
  { title: 'B', tags: ['js'] },
  { title: 'C', tags: ['html', 'scss'] }
];

/* const map = posts.map(item => item.tags)
const flatMap = posts.flatMap(item => item.tags)
console.log(map)
console.log(flatMap) */
/* const allUniqueTags = [...new Set(posts.flatMap(item => item.tags))].sort()
console.log(allUniqueTags) */

// CAH077236811626

/* const list = ['a', 'b'];
list.push('c')
console.log(list)
const bigger = [...list, 'd']
console.log(bigger) */

/* const list = ['a', 'b'];
const result = list.push('c')
console.log(list) */

/* const a = ['x', 'y'];
a.push('z');
console.log(a) */

/* const b = ['x', 'y'];
const c= [...b,'z']
console.log(b, c) */

/* localStorage.setItem('city', 'Kolkata')
localStorage.getItem('city');
localStorage.removeItem('city') */

/* localStorage.setItem('user', JSON.stringify({name: "Monirul", city:'Noida'}));
const backToObject = JSON.parse(localStorage.getItem('user'));
console.log(backToObject.city)  */             

/* const nums = [1,2,3];
const result = nums.map(n => console.log(n));
console.log(result) */

/* const list = [5, 10, 2];
const filtered = list.filter(n => n>4)
console.log(filtered) */

/* const nums = [1, 2, 3,4,5,6,7,8,9,10]
const result = nums.map(n => `3 X ${n} = ${n*3}`)
console.log(result) */

localStorage.setItem('gandi-cheez', 'hello world');
const bad = localStorage.getItem('gandi-cheez');
console.log(JSON.parse(bad))
