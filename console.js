/* const objList = [
  {
    id: '01',
    name: 'John Doe',
  },
  {},

  {
    id: '02',
    name: 'Jane Smith',
  },
];

const mappedList = objList.filter((item) => item && item.id);
console.log(mappedList); */

/* console.log('1');
setTimeout(function () {
  console.log('2');
}, 300);

setTimeout(function () {
  console.log('3');
}, 0);
console.log('4'); */

/* console.log('start');

setTimeout(function () {
  console.log('timeout');
}, 0);

Promise.resolve().then(function () {
  console.log('promise');
});

console.log('end'); */

/* const p = new Promise(function (resolve) {
  setTimeout(function () {
    resolve('Noida');
  }, 1000);
});

console.log(p);

p.then(function (value) {
  console.log(value);
}); */

/* const p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('Server down');
  }, 1000);
});

p.then(function (value) {
  console.log('then:', value);
})
  .catch(function (e) {
    console.log('catch:', e);
  })
  .finally(function () {
    console.log('finally');
  }); */

function wait(ms) {
  const p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve('Resolve ho gaya');
    }, ms);
  });
  return p;
}

wait(1000).then(function (value) {
  console.log(value);
});

function makeCity() {
  const c = 'Noida';
  return c;
}
console.log(makeCity());
