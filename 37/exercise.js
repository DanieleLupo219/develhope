const number = 7;

let greaterThan = new Promise((resolve, reject) => {
  if (number > 10) {
    return resolve(number);
  } else return reject("number is not greater than 10");
});

greaterThan.then((val) => console.log(val)).catch((err) => console.error(err));
