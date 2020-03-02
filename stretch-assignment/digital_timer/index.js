// //General counter function
// function counterFunction(domID) {
//   let count = 0;

//   return function() {
//     count != 9 ? (count += 1) : (count = 0);
//     document.querySelector(domID).textContent = count;

//     // Since the time limit is 10 seconds, that means whenever
//     // #secondTens hit number 1, we can stop the counter
//     if (document.querySelector("#secondTens").textContent == 1) {
//       clearInterval(msTens);
//       clearInterval(msHundreds);
//       clearInterval(secondOnes);
//       clearInterval(secondTens);

//       // msTens move so fast so when timer finishes last digit always
//       // gets a random number, so I clean up any accident here
//       document
//         .querySelectorAll("#msTens, #msHundreds, #secondOnes")
//         .forEach(item => (item.textContent = 0));

//       // When timer finishes, numbers get red color
//       document.querySelector(".digits").style.color = "red";
//     }
//   };
// }

// //Make every digit starts with zero instead of hyphen
// document
//   .querySelectorAll("#msTens, #msHundreds, #secondOnes, #secondTens")
//   .forEach(item => (item.textContent = 0));

// const msTens = setInterval(counterFunction("#msTens"), 10);
// const msHundreds = setInterval(counterFunction("#msHundreds"), 100);
// const secondOnes = setInterval(counterFunction("#secondOnes"), 1000);
// const secondTens = setInterval(counterFunction("#secondTens"), 10000);

function counter() {
  let globalCount = 0; // counts up every 10ms
  let counterDigits = [0, 0, 0, 0]; //starting array for counter digits
  let [first, second, third, forth] = counterDigits; //first second third forth definitions

  return function() {
    globalCount++;
    first = first < 9 ? first + 1 : 0;
    second =
      second < 9 && globalCount % 10 == 0
        ? second + 1
        : second == 9 && globalCount % 10 == 0
        ? 0
        : second;
    third =
      third < 9 && globalCount % 100 == 0
        ? third + 1
        : third == 9 && globalCount % 100 == 0
        ? 0
        : third;
    forth = globalCount % 1000 == 0 ? forth + 1 : 0;

    if (forth > 0) {
      clearInterval(countToTen);
      document.querySelector(".digits").style.color = "red";
      let timesup = document.createElement("h1");
      timesup.textContent = "Time's up!";
      timesup.style.textAlign = "center";
      document.querySelector(".digits").appendChild(timesup);
    }

    counterDigits = [first, second, third, forth]; // counting digits are assigned to counterDigits
    counterDigits.reverse(); // reverse because in HTML digits start from left to right whereas my first, second, third, forth variables are starting from right
    document
      .querySelectorAll("#secondTens, #secondOnes, #msHundreds, #msTens")
      .forEach((item, index) => (item.textContent = counterDigits[index]));

    console.log(counterDigits);
  };
}

let countToTen = setInterval(counter(), 10);
