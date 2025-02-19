/*
`call`, `apply`, and `bind` are methods in JavaScript used to invoke functions with a specified `this` context. Here's how they differ:

### 1. `call()`
- Invokes a function immediately.
- The first argument is the `this` value, and the rest are passed as individual arguments.

```javascript
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: "Alice" };
greet.call(person, "Hello", "!"); // Output: "Hello, Alice!"
```

### 2. `apply()`
- Similar to `call()`, but arguments are passed as an array.

```javascript
greet.apply(person, ["Hi", "!"]); // Output: "Hi, Alice!"
```

### 3. `bind()`
- Does **not** invoke the function immediately.
- Returns a new function with the specified `this` context and preset arguments.

```javascript
const boundGreet = greet.bind(person, "Hey");
boundGreet("?"); // Output: "Hey, Alice?"
```

### Summary:
| Method  | Invocation | Arguments |
|---------|-----------|-----------|
| `call`  | Immediate | Passed individually |
| `apply` | Immediate | Passed as an array |
| `bind`  | Returns a new function | Passed individually (can be partially applied) |

Would you like an example demonstrating practical use cases? 🚀

*/

const user1 = {
  username: "addooo",
  age: 44,
  about: function (hobby, food) {
    console.log(
      `name is ${this.username} and age is ${this.age} and ${hobby} and ${food}`
    );
  },
};
const user2 = {
  username: "aneeee",
  age: 14,
};
console.log(user1.username);
console.log(user2.username);

const array = ["games", "orange"];

user1.about();
user1.about.call(user2, "games", "orange");
user1.about.apply(user2, array);
const func = user1.about.bind(user2);
func("racing", "grass");

/*
### **Advantages of `call()`, `apply()`, and `bind()`**  

#### **1. `call()` Advantages**  
✅ **Immediate Execution** – Calls the function right away with a specified `this`.  
✅ **Fine Control Over Arguments** – Passes arguments individually, making it more readable when dealing with a known number of parameters.  
✅ **Useful for Inheritance** – Helps in borrowing methods from one object to another.  

🔹 **Example (Borrowing Methods)**  
```javascript
const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function sayHello() {
    console.log("Hello, " + this.name);
}

sayHello.call(person1); // "Hello, Alice"
sayHello.call(person2); // "Hello, Bob"
```

---

#### **2. `apply()` Advantages**  
✅ **Immediate Execution** – Just like `call()`, but accepts arguments as an array.  
✅ **Useful When Arguments Are in an Array** – Great for dynamic argument lists, such as using `Math.max()`.  

🔹 **Example (Finding Max in an Array)**  
```javascript
const numbers = [1, 5, 3, 9, 2];
const maxNumber = Math.max.apply(null, numbers);
console.log(maxNumber); // 9
```

---

#### **3. `bind()` Advantages**  
✅ **Does Not Execute Immediately** – Returns a new function, allowing for delayed execution.  
✅ **Function Pre-setting (Partial Application)** – Useful for creating pre-configured functions.  
✅ **Maintains `this` in Callbacks** – Helps ensure `this` remains correct in asynchronous operations or event listeners.  

🔹 **Example (Pre-setting Arguments & Using in Event Listener)**  
```javascript
const person = {
    name: "Charlie",
    greet: function (message) {
        console.log(message + ", " + this.name);
    }
};

const boundGreet = person.greet.bind(person, "Hello");
boundGreet(); // "Hello, Charlie"

// Ensuring `this` inside event listener
const button = document.getElementById("myButton");
button.addEventListener("click", boundGreet); // `this` remains `person`
```

---

### **Which One to Use?**
- Use **`call()`** when you need **immediate execution** and want to pass arguments individually.  
- Use **`apply()`** when arguments are already in **array format**.  
- Use **`bind()`** when you need **a function with a fixed `this` context** that you can call later.  

Let me know if you need more examples! 🚀
*/
