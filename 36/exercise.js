function repeatHello(callback) {
  const id = setInterval(callback, 1000);
  setTimeout(() => {
    clearInterval(id);
  }, 5000);
}

const callback = () => {
  console.log("Hello");
};

repeatHello(callback);
