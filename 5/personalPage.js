import genresArray from './genres.js';

const role = localStorage.getItem('userRole')
const name = localStorage.getItem('userName')

const greetingMessage = document.getElementById('greetingMessage')
const personalPageBody = document.getElementById('personalPageBody')
const logOutButton = document.querySelector('.logOutButton')
const selectGenres = document.querySelector('.selectGenres')
const selectGenresButton = document.querySelector('.selectGenresButton')
const genresMenu = document.querySelector('.genresMenu')
const authorGenres = document.querySelector('.authorGenres')






greetingMessage.innerHTML = `Hello, ${name}!`

if (role === 'Author') {

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
            <h3>Жанры</h3>
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

// authorGenres.innerHTML = [...genresArray]


const renderGenresMenu = () => {
    selectGenres.style.display = 'flex'

    const selectedGenres = []

    genresArray.forEach(genre => {
        let genreBtn = document.createElement('button')
        genreBtn.textContent = genre

        genresMenu.append(genreBtn)

        genreBtn.addEventListener('click', (event) => {


            const targetName = event.target.textContent

            if (!selectedGenres.includes(targetName)) {
                selectedGenres.push(targetName)
                console.log(...selectedGenres);
            } else {
                console.log(`Жанр ${targetName} уже выбран`);
            }

            localStorage.setItem('authorGenres', JSON.stringify(selectedGenres));
            // renderAuthorGenres();

            console.log(selectedGenres);

        return

        })

    })
}

selectGenresButton.addEventListener('click', renderGenresMenu)


const renderAuthorGenres = () => {
    // const selectedGenres = localStorage.getItem('authorGenres')

    const selectedGenres = JSON.parse(localStorage.getItem('authorGenres')) || []


    authorGenres.innerHTML = `
    
        <h3>Ваши жанры:</h3>
        <p>${[...selectedGenres]}</p>
    `
}


document.addEventListener('DOMContentLoaded', renderAuthorGenres);



// 1) ф-ция отрисовки окна со всеми жанрами. срабатывает при нажатии на кнопку "выбрать жанры"
// 2) ф-ция выбора жанров: target по клику -> push в массив (мб тут как-то применить spread) -> запись массива в localStorage
// 3) ф-ция отрисовки выбранных жанров (закрытие 2 функции -> взятие массива из localStorage -> использование spread для удобной отрисовки -> innerHTML)