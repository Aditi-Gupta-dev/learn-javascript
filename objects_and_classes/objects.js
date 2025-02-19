console.log("hiii");
function info() {
  console.log(`the name is ${this.username}and id is ${this.id}`);
}

const user1 = {
  username: "hitesh",
  id: 1,
  about: info,
};
const user2 = {
  username: "harshit",
  id: 2,
  about: info,
};
const user3 = {
  username: "aditi",
  id: 3,
  about: info,
};

console.log(this);

info();
user1.about();
user2.about();
user3.about();
