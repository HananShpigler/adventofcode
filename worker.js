const fs = require("fs");

function solvePartOne() {
  fs.readFile("./puzzle_input.txt", (err, data) => {
    if (err) {
      throw new Error("couldn't read file");
    } else {
      const directions = data.toString();
      const directionsArray = directions.split("");
      const floor = directionsArray.reduce((acc, currentValue) => {
        if (currentValue === "(") {
          return (acc += 1);
        } else if (currentValue === ")") {
          return (acc -= 1);
        }
      }, 0);
      console.log("floor:", floor);
    }
  });
}

solvePartOne();

function solvePartTwo() {
  fs.readFile("./puzzle_input.txt", (err, data) => {
    if (err) {
      throw new Error("couldn't read file");
    } else {
      const directions = data.toString();
      const directionsArray = directions.split("");
      let accumulator = 0;
      let counter = 0;
      directionsArray.some((currentBracket) => {
        if (currentBracket === "(") {
          accumulator += 1;
        } else if (currentBracket === ")") {
          accumulator -= 1;
        }
        counter++;
        return accumulator < 0;
      });
      console.log("position:", counter);
    }
  });
}

solvePartTwo();
