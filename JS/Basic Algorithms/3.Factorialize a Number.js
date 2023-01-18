// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.



function factorialize(num) {
  let newNum = num;
  if (num) {
    for (let index = 1; index < num; index++) {
      newNum *= index
    }
    return newNum;
  }
  return newNum = 1

}

console.log(factorialize(5));
console.log(factorialize(0));