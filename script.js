
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 8);
let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for (let i = 0; i < 2; i++){

let quest1 = prompt('Один из последних просмотренных фильмов?');
let quest2 = prompt('На сколько оцените его?');

personalMovieDB.movies[quest1] = quest2; 
}

console.log(personalMovieDB)