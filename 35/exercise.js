function repeatHello(callback) {
  setInterval(callback, 1000);
}

// function callback() {
//   console.log("Hello");
// }

const callback = () => {
  console.log("Hello");
};

repeatHello(callback);
