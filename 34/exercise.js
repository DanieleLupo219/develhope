function printAsyncName(callback, name) {
  setTimeout(() => {
    callback();
    setTimeout(() => {
      console.log(name);
    }, 1000);
  }, 1000);
}

function callback() {
  console.log("Hello");
}

printAsyncName(callback, "Dan");
