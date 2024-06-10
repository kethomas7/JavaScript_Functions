console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  if (count < 0) {
    console.log("Please enter a postive number");
    return;
  }

  for (let i = 0; i <= count; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

printOdds(100);
printOdds(-100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");



function checkAge(userName, age) {
  
  if (!userName || !age) {
  console.log("Please provide both a name and age");
  return;
}

  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  if (age < 16) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}
checkAge();
checkAge(15);
checkAge("kethomas7", 27);
checkAge("Cyd", 13);
