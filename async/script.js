function wait(ms) {
  const p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve('Solve ho gaya');
    }, ms);
  });
  return p;
}

wait(2000)
  .then(function (value) {
    console.log(value);
    return 'Noida';
  })
  .then(function (value) {
    console.log('2:', value);
  });
