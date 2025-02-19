// we want to create a function to return a user object having name age, and address
//we also want to add to add 3 functions (methods) in every object

const allmethods = {
  sing: function () {
    console.log("is singing");
  },
  is18: function () {
    return this.age >= 18;
  },
  about() {
    console.log(`name is ${this.username}`);
  },
};
const createuser = function (name, age, address) {
  //   const user = {};
  //this also creates an empty array but will not assign the insatance of the object allmethods

  const user = Object.create(allmethods);
  //creates an empty object user with proto of allmethods(we can access all methods of object allmethods)

  user.username = name;
  user.age = age;
  user.address = address;
  return user;
};
const user1 = createuser("aditi", 23, "earth");
console.log(user1);
user1.about();

const hello = function () {
  console.log("uhrjbjb");
};
const hello1 = { name: "fef", age: 22 };

hello.prototype.abc = 33;
console.log(hello.prototype); // only functions have prototype (empty object)
console.log(hello.__proto__); // proto and prototype is diff
console.log(hello1.prototype);

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log("Hello, " + this.name);
};

//__proto__= referce pointer ,pointing to prototype pf constructor function Belongs to	Objects (instances)
//Prototype=Used to define shared methods for all instances,belongs to 	Constructor functions

const alice = new Person("Alice");
alice.greet(); // "Hello, Alice"

console.log(alice.__proto__);
console.log(Person.prototype);

console.log(alice.__proto__ === Person.prototype); // true

/*
### **Understanding `__proto__` and `prototype` in JavaScript**  

In JavaScript, **`__proto__`** and **`prototype`** are key concepts related to object inheritance. They are often confused, but they serve different purposes.

---

## **1. `__proto__` (Dunder Proto)**
✅ **What is it?**  
- `__proto__` is an **internal reference** to the prototype of an object.  
- It connects an object to the prototype of its constructor function.  

✅ **Purpose:**  
- Allows objects to inherit properties and methods from their prototype chain.  

✅ **Example:**
```javascript
const person = { name: "Alice" };
console.log(person.__proto__); // Logs the prototype object (in this case, Object.prototype)
```

✅ **Key Points:**
- Every JavaScript object has a `__proto__` that points to its prototype.
- It is **not recommended** to use `__proto__` directly (use `Object.getPrototypeOf()` instead).

---

## **2. `prototype`**
✅ **What is it?**  
- `prototype` is a **property of constructor functions**.  
- It is an object that contains methods and properties that will be inherited by instances created from the constructor.  

✅ **Purpose:**  
- Used to define methods and properties that will be shared across all instances of a constructor function.  

✅ **Example:**
```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log("Hello, " + this.name);
};

const alice = new Person("Alice");
alice.greet(); // "Hello, Alice"

console.log(alice.__proto__ === Person.prototype); // true
```

✅ **Key Points:**
- `prototype` is a property of **functions (constructor functions)**.
- Objects created using `new` will have their `__proto__` pointing to the constructor’s `prototype`.
- Changes to `prototype` affect all instances.

---

## **🔍 `__proto__` vs `prototype` – Key Differences**
| Feature      | `__proto__` | `prototype` |
|-------------|------------|------------|
| Belongs to  | Objects (instances) | Constructor functions |
| Type        | Object | Object |
| Usage       | Points to the prototype of an object | Used to define shared methods for all instances |
| Modification | Not recommended | Preferred for defining shared properties and methods |

---

## **🚀 Quick Analogy**
- Think of `prototype` as **a blueprint for houses**.  
- `__proto__` is the **actual connection of a house to that blueprint**.  

Would you like a deeper explanation or a real-world analogy? 😊
*/
