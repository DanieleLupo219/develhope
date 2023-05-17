const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = {};

for (const value in person1) {
  person2[value] = person1[value];
}

person2["firstName"] = "Simon";

console.log(person1);
console.log(person2);

/*Objects, unlike primitives which are passed by value, are passed by 
reference: an object's value is given a reference and changing it will 
reflect on all other instances of that object. */