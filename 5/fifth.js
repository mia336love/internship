// https://metanit.com/web/javascript/4.12.php

// class Person{}

// const tom = new Person();
// const bob = new Person();

// console.log(tom);
// console.log(bob);
//----------------------------------------------------

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
        // this.role = 'author'
    }
}

class Reader extends User {
    constructor(options) {
        super(options)  // данные как у User
        // this.role = 'reader'
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