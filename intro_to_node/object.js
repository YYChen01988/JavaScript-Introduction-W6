// var movie = {
//   title: "It's a wonderful life",
//   year: 1946,
//   language: "Spanish",
//   cast: ["Alistair Kane", "Alan Russell"]
// };
// console.log(movie.title);





// var rating = {
//   critic:94,
//   audience:95
// // raitng needs to exist before movie cuz rating is in the movie
// }
//
//
// var movie = {
//   title: "It's a wonderful life",
//   year: 1946,
//   language: "Spanish",
//   rating: rating
// };



var movie = {
  title: "It's a wonderful life",
  year: 1946,
  language: "Spanish",
  rating: {
    critic:94,
    audience:95
  }
};

// movie.filmcast = ["Alistair Kane", "Alan Russell"]
// movie["film-cast"] = ["Alistair Kane", "Alan Russell"]
movie.Film_Cast = ["Alistair Kane", "Alan Russell"]

// movie.language = "English"
movie["language"] = "English"

// console.log(movie);
// console.log(movie.rating.critic);


// As long as "key" matches and "values" matches
// for (var key in movie){
//   var value = movie[key];
//   console.log(`The ${key} is ${value}`);
// }
// var keys = Object.keys(movie);
// console.log(keys);


var keys = Object.keys(movie);
for (var i=0; i < keys.length; i++){
  var key = keys[i];
  var value = movie[key];
  console.log(`The ${key} is ${value}`);
}
