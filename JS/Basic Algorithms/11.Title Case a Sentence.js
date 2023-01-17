function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("I'm a little tea POT"));