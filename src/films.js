// Exercise 1: Get the array of all directors.
//console.table(movies);

function getAllDirectors(array) { 
  let result =  array.map (function (film) {
    return film.director;
  })  
  console.log("EXERCICE 1 ->", result);
  return result; 
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter((film) => film.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}
 

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let filmsFromDirector = getMoviesFromDirector(array, director);  
  const addition =  filmsFromDirector.reduce((accumulator, currentValue) => {
    accumulator += currentValue.score;  
    return accumulator;  
  }, 0);
  let average = +(addition / filmsFromDirector.length).toFixed(2);
  console.log("EXERCICE 3 ->", average);
  return average;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const titles = array.map(film => film.title);
  const ordererTitles = titles.sort(); 
  const ordererTitles20 = ordererTitles.slice(0, 20);
  console.log("EXERCICE 4 ->", ordererTitles20);
  return ordererTitles20;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let films = [...array];
  films.sort((a,b) =>{
    if(a.year > b.year){
      return 1;
    }
    if(a.year < b.year){
      return -1;
    }
    return a.title.localeCompare(b.title);
  });
  console.log("EXERCICE 5 ->", films);
  return films;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let accumulator = 0;
  let counter = 0;
  array.forEach(film => {
    const movieList = film.genre.includes(category);
    if(movieList){
      accumulator += film.score;
      counter++;
    }
  });
  let averageCategory = +(accumulator / counter).toFixed(2);
  console.log("EXERCICE 6 ->", averageCategory);
  return +(averageCategory).toFixed(2); 
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {  
  let hour = 0;
  let minuts = 0;
  let min3 = 0;
  let min4 = 0;
  let totalHours = 0;
  let totalMinuts = 0;
  const originalArrayNewDuration = array.map(film => ({ ...film }));
  const durationsFilms = originalArrayNewDuration.forEach(film => {
    console.table("Array original dentro del primer forEach", array);
    hour = +(film.duration[0]);
    min3 = +(film.duration[3]);
    min4 = +(film.duration[4]);
    if(!isNaN(parseInt(min3)) && !isNaN(parseInt(min4))){
      minuts = min3.toString() + min4.toString(); 
      minuts = +(minuts);     
    }
    else if (!isNaN(parseInt(min3))) {
      minuts = min3;
    }  
    else {
      minuts = 0;
    }
    totalHours = +(hour * 60);
    totalMinuts = +(minuts) + +(totalHours);
    film.duration = totalMinuts;
   });  
  console.log("EXERCICE 7 ->", originalArrayNewDuration);
  return originalArrayNewDuration;
};

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, usuariYear) {
  const bestFilmOfYear = array.map(film => ({ ...film}));
  const filmsFromYear = bestFilmOfYear.filter((film) => film.year === usuariYear);
  const bestScoreYear = filmsFromYear.reduce(function (bestScoreFilms, currentFilmScore) {
    if (!bestScoreFilms.length || currentFilmScore.score > bestScoreFilms[0].score) {
        return [currentFilmScore];
    } else if (currentFilmScore.score === bestScoreFilms[0].score) {
        bestScoreFilms.push(currentFilmScore);
    }
    return bestScoreFilms;
}, []);
  console.log("EXERCICE 8 ->", bestScoreYear);
  return bestScoreYear;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
