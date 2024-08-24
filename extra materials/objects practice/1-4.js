//Objective: Update a specific object within an array of objects.
const movies = [
  { id: 1, title: "Inception", rating: 8.8 },
  { id: 2, title: "The Matrix", rating: 8.7 },
  { id: 3, title: "Interstellar", rating: 8.6 },
];

updateRating(2, 9);
console.log("Updated Movies:", movies);

function updateRating(id, newRating) {
  // const movie = movies.find((movie) => movie.id === id);
  // if (!movie) throw new Error("Not found movie");
  // if(movie) {
  //   movie.rating = newRating;
  // }
  // movie.rating = newRating;

  for (const movie of movies) {
    if (movie.id === id) {
      movie.rating = newRating;
      break;
    }
  }
}
