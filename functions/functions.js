// function sayHello(greeting, name = 'World'){
//   return `${greeting} ${name}`;
// }
//
// console.log('sayHello message:', sayHello('Hi', 'Rocky'));


// this works too but not suggested to do it in our code
// console.log('sayHello message:', sayHello('Hi', 'Rocky'));
//
// function sayHello(greeting, name = 'World'){
//   return `${greeting} ${name}`;
// }



// var add = function(firstNumber, secondNumber){
//   return firstNumber+secondNumber;
// }
//
// console.log('2 + 3 with add function:', add(2,3));






// ### Task:
//
// 1. Declare a **named** function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.
//
// 2. Define an **anonymous** function expression that takes two arguments:
//   - an object, for example, `{ name: 'Wojtek', age: 30 }`
//   - a string, for exmaple, `'name'`
//
//   Your function should return `true` if the given string is a `key` on the given object and `false` if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.



// Q1 Answer1
// function arrayTotaliser(array){
//   var sum=0;
//   for ((var i=0; i<array.length; i++)){
//     sum+=array[i]
//   }
//   return sum
// }
// console.log(arrayTotaliser([1,2,3]));

// Q1 Answer2
// function arrayTotaliser(array){
//   var sum=0;
//   for (var number of array){
//     sum+= number;
//   }
//   return sum
// }
// console.log(arrayTotaliser([1,2,3]));






// Q2 Answer1
// var hasKey = function (object,string){
  //A1// return object.hasOwnProperty(string)

//A2//   var keys = Object.keys(object);
//   if(keys.includes(string)){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
//
// var obj = {
//   name: 'Wojtek',
//   age: 30
// }
// console.log('Result of function:', hasKey(obj,'name'));


// Q2 Answer2
// var hasKey = function (object,string){
//   for (var key in object){
//     if (key == string){
//       return true
//     }
//     else{
//       return false
//     }
//   }
// }
//
// var obj = {
//   name: 'Wojtek',
//   age: 30
// }
// console.log('Result of function:', hasKey(obj,'name'));









// => arro function is always anonymous, no name
// var multiply = (firstNumber, secondNumber) => firstNumber*secondNumber;
//
// console.log('multiply 2 by 5:', multiply(2, 5));
