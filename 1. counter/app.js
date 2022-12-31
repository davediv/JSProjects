// INIT
let count = 0
let counter = document.getElementById('counter')
counter.innerHTML = count;

// INCREASE
const increase = () => {
    count++
    counter.innerHTML = count;
}

// DECREASE
const decrease = () => {
    if (count) {
        count--
        counter.innerHTML = count;    
    }
}

// RESET
const reset = () => {
    count = 0;
    counter.innerHTML = count;
}