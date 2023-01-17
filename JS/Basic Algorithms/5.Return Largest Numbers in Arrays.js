function largestOfFour(arr) {
  let newLargestArray = [];
  arr.forEach(element => {
    let largestNum = element[0]
    element.forEach(childElement => {
      if (largestNum < childElement) {
        largestNum = childElement
      }
    })
    newLargestArray.push(largestNum)
  })
  return newLargestArray
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));