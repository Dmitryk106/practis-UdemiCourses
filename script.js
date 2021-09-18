'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 8);
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for (let i = 0; i < 2; i++){

let a = prompt('Один из последних просмотренных фильмов?');
let b = prompt('На сколько оцените его?');
if (a == '' || a == undefined || a.length > 50 || b == '' || b == undefined )
{
    i--;
} else { personalMovieDB.movies[a] = b;}
}

if (personalMovieDB.count < 10) {
    alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 30) {
    alert ('Вы киноман');
} else { alert ('Вы классический зритель');}


console.log(personalMovieDB);