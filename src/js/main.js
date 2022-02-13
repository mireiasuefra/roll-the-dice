'use strict';

console.log('>> Ready :)');

const rollDice = document.querySelector('.js-rollDice');
const yourResultIs = document.querySelector('.js-yourResultIs');
const inputSideDice = document.querySelector('.js-inputSideDice');
const numberConterIs = document.querySelector('.js-counterIs');
let rollDiceCounter = 0;


function handleRollDice() {
  const sides = parseInt(inputSideDice.value);

  if (sides <= 2) {
    yourResultIs.innerHTML = 'No hay dados con tan pocos lados!';
  } else if (sides >= 3 && sides <= 10) {

    tellMeRollDiceResult(sides);

    tellMeRollDiceCounter();

  } else if (sides > 10 && sides <= 13) {
    yourResultIs.innerHTML = 'Ese numero de lados no me gusta, prueba otro!';
  } else if (sides >= 13) {
    yourResultIs.innerHTML = 'Demasiados lados!!!';
  }
}


function tellMeRollDiceResult(sides) {
  const resultDice = Math.ceil(Math.random() * sides);
  yourResultIs.innerHTML = `Cara del dado: ${resultDice} puntitos`;
}


function tellMeRollDiceCounter() {
  rollDiceCounter = rollDiceCounter + 1;
  numberConterIs.innerHTML = `Llevas estas tiradas: ${rollDiceCounter}`;
}

rollDice.addEventListener('click', handleRollDice);
