function booWho(bool) {
  let isBool = bool === true || bool === false  
  return isBool
    ? true
    : false
}

console.log(booWho(null));