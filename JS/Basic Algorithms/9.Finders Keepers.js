function findElement(arr, func) {
  for (let index = 0; index < arr.length; index++) {
    if (func(arr[index])) return arr[index]
  }
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));