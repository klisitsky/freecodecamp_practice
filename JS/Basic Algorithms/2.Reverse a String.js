function reverseString(str) {
  let reverseStr = '';
  for (let index = str.length-1; index >= 0; index--) {
  reverseStr += str[index]
  }
  return reverseStr
}

console.log(reverseString("hello"));