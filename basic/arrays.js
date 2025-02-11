let array1 = ["apple", "mango", "banana"];
let array2 = ["red", "blue", "green"];

//create clone or array1 and add some new items to it ;
let clone = array1.slice(0);
let clone1 = array1.slice(0).concat(["peach"]);
let clone2 = [].concat(array1, ["lotus", "rose"]);
let clone3 = [...array1, "honey", "bunny"];

// if (array1 === clone) {
//   console.log("both are same ");
// } else {
//   console.log("both are diff");
// }

let ans = array1 === clone ? "yes" : "no";
console.log(ans);

// console.log(clone1);
// console.log(clone2);
// console.log(clone3);

// to get length of array use array.lenght
// console.log(clone.length);

/*********ARRAY LOOPS ***********************************************
 * for loop
 * while loop
 * for of loop
 * for in loop
 */
// let fruits = [];
// let basket = [];

// for (let i = 0; i < clone1.length; i++) {
//   //   console.log(clone1[i], clone1[i].toUpperCase());
//   //   console.log();
//   fruits.push(clone1[i]);
//   basket.unshift(clone1[i]);
// }
// console.log(fruits);
// console.log(basket);
// let val = fruits == clone1 ? "yes" : "no";
// console.log(`fruits is ${val} to clone1`);

//while loop

//for of loop  => gives value of each itemof array
// for (let fruit of fruits) {
//   console.log(fruit);
// }

//for in loop => gives index of array
// for (let idx in fruits) {
//   console.log(idx, fruits[idx].toUpperCase());
// }

/************************************* array destructuring ****************** */
// if i want to store the array items to some variables then iave to extract it by the process
let var1 = clone1[0];
let var2 = clone1[1];

// like this i can assign and store the values but what if the array is too long then it will be a complex process , so do the following
// let [var3, var4, var5] = clone1;
// if you want to store the remaining part in a new array then simly do
let [var3, var4, var5, ...mynewarray] = clone1;

// console.log(var3, var4, var5);
// console.log(mynewarray);

const obj = { ..."abc" };
console.log(obj);
