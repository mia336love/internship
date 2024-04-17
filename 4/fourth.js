let calculator = document.querySelector('.arithmetic')

let num1 = ''
let num2 = ''
let operator = ''


calculator.addEventListener('click', (event) => {
    if (event.target.classList.contains('num')) {
        if (operator === '') {
            num1 += event.target.textContent
        } else if (operator !== '') {
            num2 += event.target.textContent
        }
    } else if (event.target.classList.contains('oper')) {
        operator = event.target.textContent
    } else if (event.target.classList.contains('equals')) {
        const result = calculate(num1, operator, num2)

        console.log('result:' + result);
        clearInput()
    }
    console.log(num1, operator, num2);
})

let calculate = (num1, operator, num2) => {
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
}

let clearInput = () => {
    num1 = ''
    num2 = ''
    operator = ''
}