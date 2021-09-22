/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const removeAdv = () => {
    const adv = document.querySelectorAll('.promo__adv  img');

adv.forEach(i => {
    i.remove();
});
};

removeAdv();

document.querySelector('.promo__genre').textContent = 'Драма';

const promoBg = document.querySelector('.promo__bg');

promoBg.style.backgroundImage = 'url("img/bg.jpg")';

movieDB.movies.sort();

const promoInterectiveItem = document.querySelectorAll('.promo__interactive-item');

promoInterectiveItem.forEach((item, i) => {
    item.innerHTML = `${i+1}. ${movieDB.movies[i]}`; 
}); 

   

