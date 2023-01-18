function mutation(arr) {
  let mainStr = arr[0]
  let searchStr = arr[1]
  
  for (let index = 0; index < searchStr.length; index++) {
    const regex = new RegExp(`[${searchStr[index]}]`, 'i');
    if (!regex.test(mainStr)) return false
  }
  return true
}

console.log(mutation(["hello", "hey"]));


