import genresArray from './genres.js';

const role = localStorage.getItem('userRole')
const name = localStorage.getItem('userName')
const email = localStorage.getItem('userEmail')

const greetingMessage = document.getElementById('greetingMessage')
const personalPageBody = document.getElementById('personalPageBody')
const logOutButton = document.querySelector('.logOutButton')
const selectGenres = document.querySelector('.selectGenres')
const selectGenresButton = document.querySelector('.selectGenresButton')
const genresMenu = document.querySelector('.genresMenu')

if (name !== null) {
    greetingMessage.innerHTML = `Hello, ${name}!`
} else {
    alert('Внимание! Данные об имени нарушены')
}

if (role !== null) {
    if (role === 'Author') {
        const selectedGenres = JSON.parse(localStorage.getItem(`${email}-Genres`)) || []

        personalPageBody.innerHTML = `
    <div class="author-dashboard">
        <section class="stats">
            <h3>Статистика</h3>
            <p>Опубликованных статей: 10</p>
            <p>Всего просмотров: 1500</p>
            <p>Лайков: 300</p>
            <p>Комментариев: 50</p>
        </section>

        <section class="authorGenres">
            <h3>Ваши жанры:</h3>
            <p class="authorSelectedGenres">${[...selectedGenres]}</p>
        </section>
    </div>
    `
    } else if (role === 'Reader') {

        personalPageBody.innerHTML = `
    <section class="stats">
        <p>Прочитано статей: 25</p>
        <p>Оставлено комментариев: 15</p>
    </section>
    `
    }
} else if (role === null) {
    alert('Внимание! Данные о роли нарушены')
}



logOutButton.addEventListener('click', () => {
    // localStorage.clear()

    localStorage.removeItem('userName')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userEmail')

    window.location.replace('./fifth.html')
})

const renderGenresMenu = () => {
    selectGenres.style.display = 'flex';
    genresMenu.innerHTML = '';

    let selectedGenres;

    if (email !== null) {
        selectedGenres = JSON.parse(localStorage.getItem(`${email}-Genres`)) || [];
    } else {
        selectGenres.style.display = 'none';
        genresMenu.innerHTML = '';
        alert('Внимание! Жанры не могут быть выбраны, потому что нарушены данные об эл. почте')
        return
    }

    genresArray.forEach(genre => {
        let genreBtn = document.createElement('button');
        genreBtn.textContent = genre;

        if (selectedGenres.includes(genre)) {
            genreBtn.style.color = 'red';
        }

        genresMenu.append(genreBtn);

        genreBtn.addEventListener('click', (event) => {
            const targetName = event.target.textContent;

            if (!selectedGenres.includes(targetName)) {
                selectedGenres.push(targetName);
                console.log(...selectedGenres);
            } else {
                console.log(`Жанр ${targetName} уже выбран`);
            }

            localStorage.setItem(`${email}-Genres`, JSON.stringify(selectedGenres));

            if (selectedGenres.includes(targetName)) {
                event.target.style.color = 'red';
            }
        });
    });
};

selectGenresButton.addEventListener('click', renderGenresMenu);