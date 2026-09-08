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

function wait(ms) {
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
run();
