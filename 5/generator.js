// генератор
function* nums(n = 10) {
    for (let i = 0; i < n; i++) {
        yield i
    }
}

for (let i of nums()) {
    console.log(i);
}

// создание итератора (?)
const iterator = {              
    [Symbol.iterator](n = 10) {        

        let i = 0
        return {              
            next() {
                if(i < n) {
                    return {value: ++i, done: false}
                }

                return {value: undefined, done: true}
            }
        }
    }
}

for(let i of iterator) {
    console.log(i);
}