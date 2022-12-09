const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.querySelector('#btnLeft');
const btnRightElement = document.querySelector('#btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  minDecElement.innerHTML = minutes[0];
  minUniElement.innerHTML = minutes[1];
  // ... your code goes here
}

function printSeconds() {
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  secDecElement.innerHTML = seconds[0];
  secUniElement.innerHTML = seconds[1];
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  let miliseconds = chronometer.computeTwoDigitNumber(
    chronometer.getMiliseconds()
  );
  milDecElement.innerHTML = miliseconds[0];
  milUniElement.innerHTML = miliseconds[1];
  // ... your code goes here
}

function printSplit() {
  let li = document.createElement('li');
  let ol = document.getElementById('splits');
  li.innerHTML = `${chronometer.split()}`;
  ol.appendChild(li);
  // ... your code goes here
}

function clearSplits() {
  splitsElement.innerHTML = '';
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.classList.value.includes('start')) {
    btnLeftElement.textContent = 'STOP';
    btnRightElement.textContent = 'SPLIT';
    chronometer.start(printTime);
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
  } else {
    btnLeftElement.textContent = 'START';
    btnRightElement.textContent = 'RESET';
    chronometer.stop();
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.value.includes('reset')) {
    chronometer.reset();
    minDecElement.innerHTML = 0;
    minUniElement.innerHTML = 0;
    secDecElement.innerHTML = 0;
    secUniElement.innerHTML = 0;
    milDecElement.innerHTML = 0;
    milUniElement.innerHTML = 0;

    clearSplits();
  } else {
    printSplit();
  }
});
