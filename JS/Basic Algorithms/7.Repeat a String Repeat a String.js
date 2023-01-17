function repeatStringNumTimes(str, num) {
  let newStr = ''
  for (let index = 0; index < num; index++) {
    newStr += str;
  }
  return newStr
}

console.log(repeatStringNumTimes("abc", 3));