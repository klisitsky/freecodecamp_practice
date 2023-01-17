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