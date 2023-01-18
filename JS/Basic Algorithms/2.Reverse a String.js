// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".



function reverseString(str) {
  let reverseStr = '';
  for (let index = str.length-1; index >= 0; index--) {
  reverseStr += str[index]
  }
  return reverseStr
}

console.log(reverseString("hello"));