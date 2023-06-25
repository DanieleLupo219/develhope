const isLogged = true;
const number = 0.8;

function firstPromise(isLogged) {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      let randomNum = Math.random();
      resolve(randomNum);
    } else {
      reject(new Error("User is not logged in"));
    }
  });
}

function secondPromise(number) {
  return new Promise((resolve, reject) => {
    if (number > 0.5) {
      let data = { name: "John", age: 24 };
      resolve(data);
    } else {
      reject(new Error("Error"));
    }
  });
}

firstPromise(isLogged)
  .then(() => secondPromise(number))
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err.message);
  });
