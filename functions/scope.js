
// var name = 'Ally';
//
// var secretsFunction = function(){
//   var pinCode = [0, 0, 0, 0]
//   console.log('name inside secretsFunction: ', name);
// }
//
// secretsFunction();
// console.log('name outside secretsFunction: ', name);


// var filterNameByFirstLetter = function(names, letter){
//   var filterNames = [];
//   for (var name of names){
//     if (name[0]===letter){
//       filterNames.push(name);
//     }
//   }
//   console.log('name after loop: ', name);
//   return filterNames;
// }
//
// var students = ['Robert', 'Ricky', 'YingYing', 'Tanny'];
// var filterstudents = filterNameByFirstLetter(students, 'R');
// console.log('filtered students: ', filterstudents);



// ##### Let
// var isItFive = function(number){
//   let result;
//   if (number ===5){
//      result = true;
//   }
//   else{
//      result = false;
//   }
//   return result
// }
// console.log('isItFive(5)', isItFive(5));
//
// ######same as above
// var isItFive = function(number){
//
//   if (number ===5){
//     var result = true;
//   }
//   else{
//     var result = false;
//   }
//   return result
// }
//
// console.log('isItFive(5)', isItFive(5));





// ###Const
// const calculateEnergy = function(mass){
//   const speedOfLight = 299792458;
//   // speedOfLight can not be modified with speedOfLight=20000000000
//   return mass * speedOfLight **2;
// }
//
// // calculateEnergy = () =>0;
//
// const energyOfMe = calculateEnergy(75);
// console.log('energy of mass 75: ', energyOfMe);



// const song = {
//   title: "Rasberry Beret",
//   artist: 'Prince'
// }
//
// console.log('song before mutation: ', song);
// song.title = 'Master of Puppets';
// console.log('song after mutation: ', song);


const helloWorld = function(){
  result = 'Hello World';
  console.log(result);
}

helloWorld();
console.log(result);
