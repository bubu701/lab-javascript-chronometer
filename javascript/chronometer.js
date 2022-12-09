class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    this.currentMilisecond = 0;
    this.intervalIdMilisecond = null;

    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      if (callback) callback();
      this.currentTime += 1;
    }, 1000);

    this.intervalIdMilisecond = setInterval(() => {
      if (callback) callback();
      this.currentMilisecond += 1;
    }, 1);
    // ... your code goes here
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
    // ... your code goes here
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
    // ... your code goes here
  }

  getMiliseconds() {
    let miliseconds = this.currentMilisecond % 100;
    return miliseconds;
  }

  computeTwoDigitNumber(value) {
    let numToString = value.toString();
    if (numToString.length < 2) {
      return `0${value}`;
    }
    return `${value}`;
    // ... your code goes here
  }

  stop() {
    clearInterval(this.intervalId);
    clearInterval(this.intervalIdMilisecond);
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0;
    this.currentMilisecond = 0;
    // ... your code goes here
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let miliseconds = this.computeTwoDigitNumber(this.getMiliseconds());

    return `${minutes}:${seconds}:${miliseconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
