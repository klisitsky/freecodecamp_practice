// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.



function booWho(bool) {
  let isBool = bool === true || bool === false  
  return isBool
    ? true
    : false
}

console.log(booWho(null));