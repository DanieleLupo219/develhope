const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(obj) {
  localStorage.setItem("user", JSON.stringify(obj));
}

function getData() {
  let json = localStorage.getItem("user");
  let user = JSON.parse(json);
  return user;
}

console.log(getData());
