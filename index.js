const form = document.querySelector('form');
const numberInput = document.querySelector('input[name="number"]');
const numberBankOutput = document.querySelector('#numberBank output');
const oddsOutput = document.querySelector('#odds output');
const evensOutput = document.querySelector('#evens output');
const sortOneButton = document.querySelector('#sortOne');
const sortAllButton = document.querySelector('#sortAll');

const state = {
    start: [],
    odds: [],
    evens: []
};


form.addEventListener('submit', addNumbers);

function addNumbers(event) {
    event.preventDefault();
    const number = parseInt(form.elements.number.value, 10);
    if (!isNaN(number)) {
        state.start.push(number);
    }
    form.elements.number.value = ''
    render();

}

sortOneButton.addEventListener('click', sortOne);
sortAllButton.addEventListener('click', sortAll);

function sortOne() {
    if (state.start.length > 0) { 
        const number = state.start.shift(); 
        if (number % 2 === 0) {
            state.evens.push(number);
        } else {
            state.odds.push(number);
        }
    }
    render();
}


function sortAll() {
    state.start.forEach(num => {
        if (num % 2 === 0) {
            state.evens.push(num);
        } else {
            state.odds.push(num);
        }
    });
 state.start = [];
    render();
}


function render() {
    numberBankOutput.innerHTML = state.start.join(', ');
    evensOutput.innerHTML = state.evens.join(', ');
    oddsOutput.innerHTML = state.odds.join(', ');
}

