//++++++++++++ FUNCTION +++++++++++++++++++
// declaration , expression,arrow

iseven(6); // due to hoisting only in declaration function
function iseven(n) {
  //   console.log(n % 2 === 0);
}

const isodd = function (n) {
  console.log(n % 2 === 1);
};
const odd = (n) => {
  //   console.log(n % 2 === 1);
};
iseven(4);
isodd(3);
odd(5);

//setting defalut value funtion(a, b=1){}

//understanding lexical scope
// let appname = "yari.com";
// function app() {
//   let val = "About Us";
//   function navbar() {
//     console.log(`the navbar item is ${val}`);
//   }
//   function section() {
//     console.log(`this is main section of ${appname}`);
//   }
//   navbar();
//   section();
// }
// app();

//passing many parameters into a function , in the below way the spread operator return a array

const addsum = function (...n) {
  //   console.log(n);
  let total = 0;
  for (let item of n) total += item;
  //   console.log(total);
};

addsum(1, 2, 3, 4, 5, 6, 7);

//parameter destructuring using objects
const obj = {
  name: "adi",
  age: 22,
};
const printdetails = function ({ name, age }) {
  //   console.log(`the age is ${age} and name is ${name}`);
};
printdetails(obj);

//******************Call back function => func calling other function where fun is passed as parameter */
function outerfun() {
  console.log("hello");
}
function innerfun(a) {
  a;
  console.log(a);
}
innerfun(outerfun);

/************** FUNCTION RETURNING OTHER FUNCTION */
function base() {
  function returnfun() {
    console.log("this is returned function");
  }
  console.log("this is the base function");
  return returnfun();
  // return returnfun;
}
// const returnedfun = base();
// returnedfun();              //OR
base();
