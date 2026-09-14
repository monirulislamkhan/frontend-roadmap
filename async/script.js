/* wait(2000)
  .then(function (value) {
    console.log(value);
    return 'Kolkata';
  })
  .then(function (value) {
    console.log(value);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log('Finally is done');
  }); */

/* function wait(ms) {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      // resolve('Data Received');
      reject('Error: something wrong');
    }, ms);
  });
  return promise;
}

async function run() {
  try {
    const value = await wait(2000);
    console.log(value);
  } catch (e) {
    console.log(e);
  } finally {
    console.log('always runs');
  }
}
run(); */

// pending
/* const p1 = new Promise(function (resolve, reject) {
  console.log('executer run');
});

console.log('1 pending', p1); */

// fullfiled
/* const p2 = new Promise(function (resolve, reject) {
  resolve('Data found');
});
console.log('Data fullfiled', p2);

const p3 = new Promise(function (resolve, reject) {
  reject('Network down');
});
console.log('reject:', p3);
p3.catch(function (e) {
  console.log(e);
}); */

/* const p4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('2 second baad aayi value');
  }, 2000);
});

console.log('abhi ka p4  :', p4);

setTimeout(function () {
  console.log('3 sec baad p4 :', p4);
}, 3000); */

/* const p5 = new Promise(function (resolve, reject) {
  resolve('pehla');
  resolve('doosra');
  reject('teesra');
  console.log('resolve ke baad ki line');
});

console.log('p5 =', p5); */

function wait(ms) {
  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve('Data Received');
    }, ms);
  });
  return promise;
}
const output = document.querySelector('#output');

const paragraph = document.createElement('p');
function showLoading() {
  paragraph.textContent = 'Loading....';
  output.append(paragraph);
}

/* function hideLoading() {
  paragraph.remove();
} */

async function run() {
  showLoading();
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Request failed with status ' + response.status);
    }
    const data = await response.json();
    const allName = data.map((item) => `<div>${item.name}</div>`).join(' ');
    output.innerHTML = allName;
    return data;
  } catch (e) {
    console.log('Error: ', e.message);
    output.innerHTML = e.message;
  }
}

async function main() {
  const users = await run();
  users.map((item) => console.log(item.name));
  const a = users.map((item) => console.log(item.name));
  const b = users.forEach((item) => console.log(item.name));
  console.log('map returned: ', a);
  console.log('forEach returned: ', b);
}
// main();

async function todos() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
      throw new Error('url status is ' + response.status);
    }
    const result = await response.json();
  } catch (e) {
    console.log(e.message);
  }
}
todos();

const loadUser = document.querySelector('#load');
loadUser.addEventListener('click', main);

/* const property = { id: 1, name: 'sky Tower', price: 7500000 };
const text = JSON.stringify(property);
console.log(text);
console.log(typeof text);

const back = JSON.parse(text);
console.log(back);
console.log(typeof back);
console.log(text.name);

localStorage.setItem('user', JSON.stringify(property));
const saved = localStorage.getItem('user');
console.log(saved.name);

try {
  const bad = '{id:1, name:"Sky Tower"}';
  const result = JSON.parse(bad);
  console.log(result);
} catch (e) {
  console.log(e.message);
}

const bad = '{id:1, name:"Sky Tower"}';
const result = JSON.parse(bad);
console.log(result); */

const property = {
  id: 1,
  name: 'Sky Tower',
  agent: null,
  photos: [],
  visit: new Date(),
  showName: function () {
    return this.name;
  },
  discount: undefined,
};
console.log(JSON.stringify(property));
console.log(property);
