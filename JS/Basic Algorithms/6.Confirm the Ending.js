function confirmEnding(str, target) {
  let regex = new RegExp(`${target}$`, 'i')
  return regex.test(str);
}

console.log(confirmEnding("Bastian", "n"));