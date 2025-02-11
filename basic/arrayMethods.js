// forEach
// Map
//Filter
//Reduce

//map()=>return a new array ,takes a callback functiion

const numbers = [1, 2, 3, 4];

const square1 = function (number, index) {
  console.log(number * number);
};

const square = function (num) {
  return num * num;
};

numbers.forEach(square1);

const squarearray = numbers.map(square);
console.log(squarearray);

const iseven = function (num) {
  return num % 2 === 0;
};
const evenarray = numbers.filter(iseven);
console.log(evenarray);

// const sumreduce = function (acc, currval) {
//   return acc + currval;
// };

// const sum = numbers.reduce(sumreduce, 0);
const sum = numbers.reduce((acc, currval) => {
  return acc + currval;
}, 0);
console.log(sum);

//sort()=>

const number2 = [2, 8, 23, 5, 111];

console.log(number2.sort()); /// this sorted according to ascii values

//this sorted according to values which is bigger
console.log(
  number2.sort((a, b) => {
    return a - b;
  })
);
