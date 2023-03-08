//Cs Bin Closures

 // CHALLENGE 1
 function createFunction() {
  return function() {
      console.log('hello');
  }
  }

  // /*** Uncomment these to check your work! ***/
  const function1 = createFunction();
  function1(); // => should console.log('hello');


  // CHALLENGE 2
function createFunctionPrinter(input) {
  return function() {
      console.log(input);
  }
  }

  // /*** Uncomment these to check your work! ***/
  const printSample = createFunctionPrinter('sample');
  printSample(); // => should console.log('sample');
  const printHello = createFunctionPrinter('hello');
  printHello(); // => should console.log('hello');


  // CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
      counter++;
      console.log('counter', counter);
  }
  return incrementCounter;
  }

  // /*** Uncomment these to check your work! ***/
  const willCounter = outer();
  const jasCounter = outer();
  willCounter(); // 1
  willCounter(); // 2
  willCounter(); // 3
  jasCounter(); // 1
  willCounter(); // 4


  // CHALLENGE 4
function addByX(x) {
  return function(num) {
      return num + x;
  }
  }

  // /*** Uncomment these to check your work! ***/
  const addByTwo = addByX(2);
  console.log(addByTwo(1)); // => should return 3
  console.log(addByTwo(2)); // => should return 4
  console.log(addByTwo(3)); // => should return 5
  const addByThree = addByX(3);
  console.log(addByThree(1)); // => should return 4
  console.log(addByThree(2)); // => should return 5
  // now call addByTwo with an input of 1
  console.log(addByTwo(1)); // => should return 3



  // CHALLENGE 5
function after(count, func) {
  let counter = 0;
      return function() {
          counter++;
          if (counter >= count) {
              return func();
          }
      }
  }
  
  // /*** Uncomment these to check your work! ***/
  const called = function() { console.log('hello') };
  const afterCalled = after(3, called);
  afterCalled(); // => nothing is printed
  afterCalled(); // => nothing is printed
  afterCalled(); // => 'hello' is printed

  // CHALLENGE 6
function delay(func, wait) {
  return function() {
      setTimeout(func, wait);
  }
  }

  // /*** Uncomment these to check your work! ***/
  function sayHi() { console.log('Hi!'); }
  const delayedHi = delay(sayHi, 2000);
  delayedHi(); // should log (after 2000ms): 'Hi!'


  // CHALLENGE 7

  function rollCall(names) {
    let counter = 0;
    return function() {
        if (counter < names.length) {
            console.log(names[counter]);
            counter++;
        } else {
            console.log('Everyone accounted for');
        }
    }
  }

  // /*** Uncomment these to check your work! ***/
  const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
  rollCaller() // => Should log 'Victoria'
  rollCaller() // => Should log 'Juan'
  rollCaller() // => Should log 'Ruth'
  rollCaller() // => Should log 'Everyone accounted for'


  // CHALLENGE 8
function saveOutput(func, magicWord) {
  let cache = {};
  return function(arg) {
      if (arg === magicWord) {
          return cache;
      } else {
          cache[arg] = func(arg);
          return func(arg);
      }
  }
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


// CHALLENGE 9


function cycleIterator(array) {
  let counter = 0;
  return function() {
      if (counter === array.length) {
          counter = 0;
      }
      let result = array[counter];
      counter++;
      return result;
  }
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'


// CHALLENGE 10

function defineFirstArg(func, arg) {
  return function() {
      return func(arg);
  }
}

// /*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15


// CHALLENGE 11

function dateStamp(func) {
  return function() {
      let obj = {
          date: new Date(),
          output: func(...arguments)
      }
      return obj;
  }
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12

function censor() {
  let cache = {};
  return function(word) {
      if (word in cache) {
          return 'BLEEP';
      } else {
          cache[word] = word;
          return word;
      }
  }
}

// /*** Uncomment these to check your work! ***/
const changeScene = censor();
console.log(changeScene('dogs')); // => should log 'dogs'
console.log(changeScene('dogs')); // => should log 'BLEEP'
console.log(changeScene('cats')); // => should log 'cats'
console.log(changeScene('cats')); // => should log 'BLEEP'
console.log(changeScene('dogs')); // => should log 'BLEEP'
console.log(changeScene('goat')); // => should log 'goat'


// CHALLENGE 13

function createSecretHolder(secret) {
  return {
      getSecret: function() {
          return secret;
      },
      setSecret: function(newSecret) {
          secret = newSecret;
      }
  }
}

// /*** Uncomment these to check your work! ***/
const obj = createSecretHolder(5);
console.log(obj.getSecret()); // => returns 5
console.log(obj.setSecret(2));
console.log(obj.getSecret()); // => returns 2


// CHALLENGE 14

function callTimes() {
  let counter = 0;
  return function() {
      counter++;
      return counter;
  }
}

// /*** Uncomment these to check your work! ***/
const myNewFunc1 = callTimes();
console.log(myNewFunc1()); // => 1
console.log(myNewFunc1()); // => 2
const myNewFunc2 = callTimes();
console.log(myNewFunc2()); // => 1

// CHALLENGE 15

function russianRoulette(num) {
  let counter = 0;
  return function() {
      counter++;
      if (counter === num) {
          return 'click';
      } else if (counter > num) {
          return 'reload to play again';
      } else {
          return 'click';
      }
  }
}

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
console.log(play()); // => should log 'click'
console.log(play()); // => should log 'click'

console.log(play()); // => should log 'click'
console.log(play()); // => should log 'reload to play again'

// CHALLENGE 16

function average() {
  let counter = 0;
  let sum = 0;
  return function(num) {
      if (num) {
          counter++;
          sum += num;
          return sum / counter;
      } else {
          return sum / counter;
      }
  }
}

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // => should log 0
console.log(avgSoFar(4)); // => should log 4
console.log(avgSoFar(8)); // => should log 6
console.log(avgSoFar()); // => should log 6
console.log(avgSoFar(12)); // => should log 8
console.log(avgSoFar()); // => should log 8

// CHALLENGE 17

function makeFuncTester(arrOfTests) {
  return function(func) {
      for (let i = 0; i < arrOfTests.length; i++) {
          let test = arrOfTests[i];
          if (func(test[0]) !== test[1]) {
              return false;
          }
      }
      return true;
  }
}

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true



function makeHistory(limit) {
  let history = [];
  return function(str) {
      if (str === 'undo') {
          if (history.length > 0) {
              history.pop();
              return history[history.length - 1];
          } else {
            return "nothing to undo";
          }
      } else {
          if (history.length === limit) {
              history.shift();
          }
          history.push(str);
          return `${str} done`;
      }
  }

}

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions('jump')); // => should log 'jump done'
console.log(myActions('undo')); // => should log 'jump undone'
console.log(myActions('walk')); // => should log 'walk done'
console.log(myActions('code')); // => should log 'code done'
console.log(myActions('pose')); // => should log 'pose done'
console.log(myActions('undo')); // => should log 'pose undone'
console.log(myActions('undo')); // => should log 'code undone'
console.log(myActions('undo')); // => should log 'nothing to undo'

// CHALLENGE 19

function blackjack(array) {
  let sum = 0;
  let count = 0;
  return function() {
      if (count === array.length) {
          return 'sorry you are out of turns!';
      }
      if (sum >= 21) {
          return 'you are done!';
      }
      sum += array[count];
      count++;
      return sum;
  }
}

// /*** Uncomment these to check your work! ***/
const playBlackjack = blackjack([10, 12, 11, 21]);
console.log(playBlackjack()); // => should log 10
console.log(playBlackjack()); // => should log 22
console.log(playBlackjack()); // => should log 33
console.log(playBlackjack()); // => should log 54
console.log(playBlackjack()); // => should log 'sorry you are out of turns!'x