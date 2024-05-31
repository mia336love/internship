import genresArray from './genres.js';

const role = localStorage.getItem('userRole')
const name = localStorage.getItem('userName')

const greetingMessage = document.getElementById('greetingMessage')
const personalPageBody = document.getElementById('personalPageBody')
const logOutButton = document.querySelector('.logOutButton')
const selectGenres = document.querySelector('.selectGenres')
const selectGenresButton = document.querySelector('.selectGenresButton')
const genresMenu = document.querySelector('.genresMenu')

greetingMessage.innerHTML = `Hello, ${name}!`

if (role === 'Author') {
    const selectedGenres = JSON.parse(localStorage.getItem('authorGenres')) || []

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

logOutButton.addEventListener('click', () => {
    localStorage.clear()
    window.location.replace('./fifth.html')
})

console.log(...genresArray);

const renderGenresMenu = () => {
    selectGenres.style.display = 'flex';
    genresMenu.innerHTML = '';

    const selectedGenres = JSON.parse(localStorage.getItem('authorGenres')) || [];

    genresArray.forEach(genre => {
        let genreBtn = document.createElement('button');
        genreBtn.textContent = genre;

        genresMenu.append(genreBtn);

        genreBtn.addEventListener('click', (event) => {
            const targetName = event.target.textContent;

            if (!selectedGenres.includes(targetName)) {
                selectedGenres.push(targetName);
                console.log(...selectedGenres);
            } else {
                console.log(`Жанр ${targetName} уже выбран`);
            }

            localStorage.setItem('authorGenres', JSON.stringify(selectedGenres));
        });
    });
};

selectGenresButton.addEventListener('click', renderGenresMenu)
