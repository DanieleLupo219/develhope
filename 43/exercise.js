const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUser(obj) {
  localStorage.setItem("user", JSON.stringify(obj));
}

saveUser(user);
