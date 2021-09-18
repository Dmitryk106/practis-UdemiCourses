'use strict';

let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 8);

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 8);
    }
}
start();
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
}; 

function rememberMyFilms(){
    for (let i = 0; i < 2; i++){

        let a = prompt('Один из последних просмотренных фильмов?');
        let b = prompt('На сколько оцените его?');

        if (a == '' || a == null || a.length > 50 || b == '' || b == undefined ) {
            i--;
        } else {
            personalMovieDB.movies[a] = b;
        }
    }
}
 
rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 30) {
        alert ('Вы киноман');
    } else { 
        alert ('Вы классический зритель');
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();


function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i+1}?`);
        personalMovieDB.genres.push(a);
    }
}

writeYourGenres();