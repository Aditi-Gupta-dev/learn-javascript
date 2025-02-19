// new keyword and proto

//with new kwyword the internal linkeing of __proto__and prototype is done

console.log("new kekword");
const createuser = function (name, age, address) {
  this.username = name;
  this.age = age;
  this.address = address;
  return this;
};

//i have created a function or function ke sath to prototype (free obj space) milta hai to alag se q object banana ...protoype obj me sare methods dal do

createuser.prototype.sing = function () {
  console.log("is singing");
};

createuser.prototype.is18 = function () {
  return this.age >= 18;
};
createuser.prototype.about = function () {
  console.log(`name is ${this.username}`);
};

const user1 = new createuser("sss", 12, "pak");

// both are same , means they are linked by new keyword
console.log(user1.__proto__);
console.log(createuser.prototype);
user1.about();

//the above thing is same what class keyword does in abstract way
