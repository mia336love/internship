const currentUrl = window.location.href;
console.log(currentUrl);

sessionStorage.setItem('currentUrl', currentUrl)

const urlFromSession = sessionStorage.getItem('currentUrl')

document.getElementById('sessionStorageOutput').innerHTML = `Текущий адрес URL: ${urlFromSession}`


//--------BOM----------

const navigatorData = window.navigator

console.log(navigatorData);
console.log("History length: ", window.history.length);

document.getElementById('historyBack').addEventListener('click', () => history.back())
document.getElementById('historyForward').addEventListener('click', () => history.forward())

document.getElementById('changePageBtn').addEventListener('click', () => {
    window.location.href = './3rdPage.html'
})


//--------Cookie----------

let userName = 'Jane Doe'
let userRole = 'Student'

document.cookie = `name=${encodeURIComponent(userName)}`
document.cookie = `role=${userRole}`



document.getElementById('CheckCookies').addEventListener('click', () => alert(document.cookie))

document.getElementById('changeCookieName').addEventListener('click', () => {
    let newName = prompt('Введите новое имя')
    document.cookie = `name=${encodeURIComponent(newName)}`
    alert(`Обновленные данные: ${document.cookie}`);
})