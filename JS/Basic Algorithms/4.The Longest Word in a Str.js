function findLongestWordLength(str) {
  let wordsArray = str.split(' ') 
  let longestWord = '' 

  wordsArray.forEach((element) => {
      if (longestWord.length < element.length) {
        longestWord = element
      }
    })

   return longestWord.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));