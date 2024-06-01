class User {
    constructor({ name, email, password }) {      // деструктуризация options
        this.name = name
        this.email = email
        this.password = password
    }

    greet() {
        alert(`Hello, ${this.name}!`)
    }
}

class Author extends User {
    constructor({ name, email, password }) {
        super({ name, email, password })  // данные как у User
    }
}

class Reader extends User {
    constructor({ name, email, password }) {
        super({ name, email, password })  // данные как у User
    }
}

const users = [
    new Reader({ name: 'mia', email: 'mia@gmail.com', password: '12345' }),
    new Author({ name: 'Katy P.', email: 'kattyperry@gmail.com', password: '12345' })
]

// REGISTRATION

const becomeAuthor = (name, email, password) => {
    let newUser = new Author({
        name: name,
        email: email,
        password: password
    })
    users.push(newUser);
    alert('Регистрация прошла успешно!')
};


const becomeReader = (name, email, password) => {
    let newUser = new Reader({
        name: name,
        email: email,
        password: password
    });
    users.push(newUser);

    alert('Регистрация прошла успешно!')
};


document.getElementById('authorButton').addEventListener('click', (event) => {
    event.preventDefault();

    let name = document.getElementById('regName').value
    let email = document.getElementById('regEmail').value
    let password = document.getElementById('regPassword').value

    for (let user of users) {
        if (user.email === email) {
            alert('Пользователь с такой эл. почтой уже зарегестрирован')
            return
        }
    }

    becomeAuthor(name, email, password)
})

document.getElementById('readerButton').addEventListener('click', (event) => {
    event.preventDefault();

    let name = document.getElementById('regName').value
    let email = document.getElementById('regEmail').value
    let password = document.getElementById('regPassword').value

    for (let user of users) {
        if (user.email === email) {
            alert('Пользователь с такой эл. почтой уже зарегестрирован')
            return
        }
    }

    becomeReader(name, email, password)
})

// LOG IN

const login = (name, email, password) => {
    for (let user of users) {
        if (user.name === name && user.email === email && user.password === password) {

            let role = user.constructor.name
            let name = user.name

            localStorage.setItem('userRole', role)
            localStorage.setItem('userName', name)
            localStorage.setItem('userEmail', email)

            window.location.replace('./personalPage.html')

            userWasFounded = true
            break

        }
    }

    if (!userWasFounded) {
        alert('Такого пользователя не существует')
    }
}

document.getElementById('loginButton').addEventListener('click', (event) => {
    event.preventDefault();

    let name = document.getElementById('logName').value
    let email = document.getElementById('logEmail').value
    let password = document.getElementById('logPassword').value

    login(name, email, password)
})