function chunkArrayInGroups(arr, size) {
  const newArr = [];

  for (let index = 0; index < arr.length; index += size) {
    newArr.push(arr.slice(index,size+index))
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "f", "g", "y"], 3));