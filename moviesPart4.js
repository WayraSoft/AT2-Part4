// File: moviesPart.js
// This file shows a Class and its properties and methods.
// Author: Carlos
// Date: 14/04/2025

// Q4.1 Define a movie class, its constructor and properties:
class Movie {
  constructor(movieId, title, year, rating) {
    this.movieId = movieId;
    this.title = title;
    this.year = year;
    this.rating = rating;
  }
}
console.log(Movie);

// Q4.2 Create an array of at least 10 movies with mock values:
  const movies = [
    new Movie(9699, "Panther", 1990, 3.3),
    new Movie(2446, "Closure", 1989, 4.4),
    new Movie(3316, "Pentagon Wars, The", 1997, 1.2),
    new Movie(1749, "Mike Tyson: Undisputed Truth", 1974, 3.8),
    new Movie(3031, "Lone Wolf McQuade", 2015, 2.8),
    new Movie(6691, "Uptown Saturday Night", 1986, 3.3),
    new Movie(9045, "See You in Hell, My Darling (Tha se do stin Kolasi, agapi mou)", 2012, 3.0),
    new Movie(2091, "A Night for Dying Tigers", 2016, 3.7),
    new Movie(5670, "Third Part of the Night, The (Trzecia czesc nocy)", 2018, 3.2),
    new Movie(8820,  "Black Sabbath (Tre volti della paura, I)", 2016, 3.8)
  ];
  console.log(movies);


  // Q4.3 Sort the array in ascending order by Movie ID:
  // "a" represents the first movie object being compared in each pair.
  // "b" represents the second movie object being compared in each pair.
  movies.sort((a, b) => a.movieId - b.movieId);
  console.log(" ");
  console.log("Movies sorted in ascending order by Movie ID:");
  console.log(movies);