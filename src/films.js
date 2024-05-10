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
  const arrayTitulos = array.map(film => film.title);
  console.log(arrayTitulos);
  const arrayOrdenada = arrayTitulos.sort();
  console.log(arrayOrdenada); 
  const array20TitulosOrdenados = arrayOrdenada.slice(0, 20);
  console.log("EXERCICE 4 ->", array20TitulosOrdenados);
  return array20TitulosOrdenados;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let peliculas = [...array];
  peliculas.sort((a,b) =>{
    if(a.year > b.year){
      return 1;
    }
    if(a.year < b.year){
      return -1;
    }
    return a.title.localeCompare(b.title);
  });
  return peliculas;
}

// Exercise 6: Calculate the average of the movies in a category REVISAR!! NO FUNCIONA!
function moviesAverageByCategory(array, category) {
  //Necesito calcular la media de las peliculas de un género determinado.
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
  console.table("Array original nada más", array);
  let durationsFilms = new Array ();
  let hour = 0;
  let minuts = 0;
  let min3 = 0;
  let min4 = 0;
  let totalHours = 0;
  let totalMinuts = 0;
  const originalArrayNewDuration = array;
  console.table("Array original antes de hacer nada", array);

  durationsFilms = originalArrayNewDuration.forEach(film => {
    console.log("Duración de la película:", film.duration);
    console.table("Array original dentro del primer forEach", array);
    hour = +(film.duration[0]);
    console.log("Horas", hour);
    //console.log(typeof(hour));
    min3 = +(film.duration[3]);
    //console.log(typeof(minutos1));
    min4 = +(film.duration[4]);
    //console.log(typeof(minutos2));
    if(!isNaN(parseInt(min3)) && !isNaN(parseInt(min4))){
      //console.log("La posición 3 es un número?: ", typeof(min3))
      //console.log("La posición 4 es un número?: ", typeof(min4))
      minuts = min3.toString() + min4.toString(); 
      minuts = +(minuts);
      //console.log("Minutos sumando posiciones 3 y 4: ", minuts);
      //console.log("Los minutos totales son un número?: ", typeof(minuts))     
    }
    else if (!isNaN(parseInt(min3))) {
      minuts = min3;
      //console.log("Minutos si sólo hay número en la posición 3: ", minuts);
      //console.log("Los minutos totales son un número?: ", typeof(minuts))
    }  
    else {
      minuts = 0;
      //console.log("Minutos si están los dos vacíos: ", minuts);
      //console.log("Los minutostotales son un número?: ", typeof(minuts))
    }    
    //console.log("Minutos", minuts);  
    totalHours = +(hour * 60);
    //console.log("Total horas en minutos", totalHours);
    totalMinuts = +(minuts) + +(totalHours);
    //console.log("Total minutos: ", totalMinuts);
    console.log("--------------------------");
    durationsFilms.push(totalMinuts);
    //console.table("Array de duraciones de película", durationsFilms);

    durationsFilms.forEach((valor, indice) => {
    originalArrayNewDuration[indice].duration = valor;
    
    });
   } );
   //Tengo que meter la array durationsFilms en los huecos de duration del array original
   //console.table("Array modificada", originalArrayNewDuration);

   if(array === originalArrayNewDuration){
    console.log("Son iguales!");
    console.table("Array modificada", originalArrayNewDuration);
    console.table("Array original", array);
   }
   else {
    console.log("No son iguales");
    console.table("Array modificada", originalArrayNewDuration);
    console.table("Array original", array);
   }
  
  return originalArrayNewDuration;
}

/*function sonNumeros(cadena) {
  return /^\d+$/.test(cadena);
}*/

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
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
