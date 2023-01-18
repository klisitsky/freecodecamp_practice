function getIndexToIns(arr, num) {
  if (arr == false) {
    return 0
  }
  arr = arr.sort((num1, num2) => num1 - num2)
  for (let index = 0; index < arr.length; index++) {
    if (num <= arr[index]) {
      return index
    }
  }
  return arr.length
}

getIndexToIns([40, 60], 50);