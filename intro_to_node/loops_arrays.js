// var sports = ["Football", "Tennis", "Rugby"];


// sports.push("Curling")

// console.log(sports[0]);
// console.log(sports);

// var lastSport = sports[sports.length - 1]
// console.log(lastSport);
// ### length is a property not a method

// sports.pop();
// console.log(sports);

// lastSport = sports.pop();
// console.log(lastSport);

// Include
// console.log(sports.includes("Tennis"));

// Concat
// var othersports = ["Darts", "Basketball"];
// sports = sports.concat(othersports);
// console.log(sports);


// Filter
// sports = sports.filter(word=> word.length>6);
// console.log(sports);


// var removesport = sports.splice(1,1)
// console.log(removesport);

// Slice means get rid of things before index[1]
// var removesport = sports.slice(1)
// console.log(removesport);





var sports = ["Football", "Tennis", "Rugby"];

sports.push("Curling");
sports.push("Darts");
sports.push("Snooker");

for (var currentSport of sports){
  var bigSport = currentSport.toUpperCase();
  console.log(bigSport);
}

// RUBY
// for (currentSport in sports)
//   bigsport = currentSport.upcase()
//   puts bigSport
// end


// for (var i = 2; i < sports.length; i++){
//   var currentSport = sports[i];
//   var bigSport = currentSport.toUpperCase();
//     console.log(bigSport);
// }





for (var i =0; i<10; i++){
  console.log(i);
}
