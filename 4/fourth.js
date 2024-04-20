// арифметические операции

const calculator = document.querySelector('.arithmetic')
const calcDisplay = document.querySelector('.ari-result')

let num1 = ''
let num2 = ''
let operator = ''

let decimalAdded = false

calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('num')) {
        if (operator === '') {
            num1 += event.target.textContent
            // calcDisplay.innerHTML += num1
            calcDisplayUpdate()

        } else if (operator !== '') {
            num2 += event.target.textContent
            // calcDisplay.innerHTML += num2
            calcDisplayUpdate()

        }
    } else if (event.target.classList.contains('dot')) {
        if (!decimalAdded && (num1 !== '' || num2 !== '')) {
            let dot = event.target.textContent
            decimalAdded = true;
            if (operator === '') {
                num1 += dot;
                // calcDisplay.innerHTML += dot
                calcDisplayUpdate()

            } else if (operator !== '') {
                num2 += dot;
                // calcDisplay.innerHTML += dot
                calcDisplayUpdate()

            }
        }
    } else if (event.target.classList.contains('oper')) {
        operator = event.target.textContent
        decimalAdded = false;

        // calcDisplay.innerHTML += operator

    } else if (event.target.classList.contains('equals')) {
        const result = calculate(num1, operator, num2)
        clearInput()
        calcDisplay.innerHTML = result
    }
    console.log(num1, operator, num2);

})

const calcDisplayUpdate = (res) => {
    calcDisplay.innerHTML = num1 + operator + num2
}

let calculate = (num1, operator, num2) => {
    try {
        switch (operator) {
            case '+':
                return Number(num1) + Number(num2);

            case '-':
                return Number(num1) - Number(num2);

            case '×':
                return Number(num1) * Number(num2);

            case '÷':
                return Number(num1) / Number(num2);

            default:
                break;
        }
    } catch (error) {
        console.error(`${error.name}: ${error.message}`)
        alert('Упс, ошибочка <(＿　＿)>')
    }
}

let clearInput = () => {
    num1 = ''
    num2 = ''
    operator = ''
    decimalAdded = false
    calcDisplay.innerHTML = ''
}

//------------------------------------------------------------------------------------------------------------------------------------------------


// строки
const userText = document.querySelector('.str-inp')

// 1. конкатенация
const concatenation = document.querySelector('.concatenation')

userText.addEventListener('input', () => {
    if (userText.value !== '') {
        concatenation.innerHTML = userText.value + ' сказала она.';  // осуждаю
    } else {
        concatenation.innerHTML = 'Конкатенация';
    }
});


// 2. экранирование
const shielding = document.querySelector('.shielding')
let message = '\'Cлэши не видно, а они есть\'';
shielding.innerHTML = message

// 3. шаблонизация
const templating = document.querySelector('.templating')

userText.addEventListener('input', () => {
    if (userText.value !== '') {
        templating.innerHTML = `Здесь написано: ${userText.value}, да?`  // осуждаю
    } else {
        templating.innerHTML = 'Шаблонизация'
    }
})