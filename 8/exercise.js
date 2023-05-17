function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    console.log(value * number);
  }
  inner();
}

multiplyByTwo(6);
