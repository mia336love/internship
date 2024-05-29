class User {
    constructor(options) {
        this.name = options.name
        this.email = options.email
        this.password = options.password
    }

    greet() {
        alert(`Hello, ${this.name}!`)
    }
}

class Author extends User {
    constructor(options) {
        super(options)  // данные как у User
    }
}

class Reader extends User {
    constructor(options) {
        super(options)  // данные как у User
    }
}

const users = []

// REGISTRATION

const becomeAuthor = (name, email, password) => {
    let newUser = new Author({
        name: name,
        email: email,
        password: password
    })
    users.push(newUser)
    console.log('A new author has been registered');
}

const becomeReader = (name, email, password) => {
    let newUser = new Reader({
        name: name,
        email: email,
        password: password
    })
    users.push(newUser)
    console.log('A new reader has been registered');
}

document.getElementById('authorButton').addEventListener('click', (event) => {
    event.preventDefault();

    let name = document.getElementById('regName').value
    let email = document.getElementById('regEmail').value
    let password = document.getElementById('regPassword').value

    becomeAuthor(name, email, password)
})

document.getElementById('readerButton').addEventListener('click', (event) => {
    event.preventDefault();

    let name = document.getElementById('regName').value
    let email = document.getElementById('regEmail').value
    let password = document.getElementById('regPassword').value

    becomeReader(name, email, password)
})

// LOG IN

const login = (name, email, password) => {
    for (let user of users) {
        if (user.name === name && user.email === email && user.password === password) {

            let role = user.constructor.name
            let name = user.name

            console.log('пользователь существует');
            

            localStorage.setItem('userRole', role)
            localStorage.setItem('userName', name)

            window.location.replace('./personalPage.html')

            return


        } else {
            console.log('пользователь не существует')
        }
    }
}

document.getElementById('loginButton').addEventListener('click', (event) => {
    event.preventDefault();

    let name = document.getElementById('logName').value
    let email = document.getElementById('logEmail').value
    let password = document.getElementById('logPassword').value

    login(name, email, password)
})