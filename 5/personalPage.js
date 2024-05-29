const role = localStorage.getItem('userRole')
const name = localStorage.getItem('userName')

const greetingMessage = document.getElementById('greetingMessage')
const personalPageBody = document.getElementById('personalPageBody')


greetingMessage.innerHTML = `Hello, ${name}!`

if (role === 'Author') {
    console.log('Это — автор');

    personalPageBody.innerHTML = `
    <div class="author-dashboard">
        <section class="stats">
            <p>Опубликованных статей: 10</p>
            <p>Всего просмотров: 1500</p>
            <p>Лайков: 300</p>
            <p>Комментариев: 50</p>
        </section>
    </div>
    `
} else if (role === 'Reader') {
    console.log('Это читатель');

    personalPageBody.innerHTML = `
    <section class="stats">
        <p>Прочитано статей: 25</p>
        <p>Оставлено комментариев: 15</p>
    </section>
    `
}
