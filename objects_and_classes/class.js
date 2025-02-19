class Createuser {
  constructor(name, age, address) {
    this.username = name;
    this.age = age;
    this.address = address;
  }

  sing() {
    console.log("is singing");
  }
  is18() {
    return this.age >= 18;
  }
  about() {
    console.log(`name is ${this.username}`);
  }
}

//apne aap linking ho jati hai ..
//bina new keyword ke class ka constructor invoke nahi hota

const user1 = new Createuser("adi", 22, "japan");
const user2 = new Createuser("sjd", 33, "dsjb");
console.log(user1.username);
console.log(typeof user1);
user1.about();
user1.about.call(user2);
