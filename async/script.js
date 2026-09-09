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
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('Data Received');
      reject('Error: something wrong');
    }, ms);
  });
  return promise;
}

/* async function run() {
  console.time('total');
  const a = await wait(2000);
  const b = await wait(2000);
  console.log(a);
  console.timeEnd('total');
}

run(); */

async function run() {
  console.time('total');
  const [a, b] = await Promise.all([wait(2000), wait(2000)]);
  console.log(a, b);
  console.timeEnd('total');
}

run();
