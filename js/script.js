/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Lesson 30

const adv = document.querySelectorAll('.promo__adv  img');
const promoBg = document.querySelector('.promo__bg');
const movieList = document.querySelector('.promo__interactive-list');


const removeAdv = (arr) => {
    arr.forEach(i => {
        i.remove();
    });
};

removeAdv(adv);

const makeChanges = () => {
    document.querySelector('.promo__genre').textContent = 'Драма';

    promoBg.style.backgroundImage = 'url("img/bg.jpg")';
};

makeChanges();


const changeFilmList = (films, parent) => {
    films.sort();
    parent.innerHTML = '';
films.forEach((item, i) => {
    parent.innerHTML += `
    <li class="promo__interactive-item">${i+1}. ${item}
        <div class="delete"></div>
    </li>`; 
}); 

document.querySelectorAll('.delete').forEach((e, i) => {
    e.addEventListener('click', () => {
        e.parentElement.remove();
        movieDB.movies.splice(i, 1);
        changeFilmList(movieDB.movies, movieList);
    });
});

};

changeFilmList(movieDB.movies, movieList);

// Lesson 33


const addForm = document.querySelector('form.add');
const addInput = addForm.querySelector('.adding__input');
const checkbox = addForm.querySelector('[type = "checkbox"]');
const deleteFilm = document.querySelectorAll('.delete');

addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substr(0, 19)}...`; 
            movieDB.movies.push(newFilm); 
        } else {movieDB.movies.push(newFilm); }
    
        if (favorite) {console.log('Мой любимый фильм!');}
    
        changeFilmList(movieDB.movies, movieList);
    }   
        
    event.target.reset();
});

// document.querySelectorAll('.delete').forEach((e, i) => {
//     e.addEventListener('click', () => {
//         e.parentElement.remove();
//         movieDB.movies.splice(i, 1);
//         changeFilmList(movieDB.movies, movieList);
//     });
// });

});





