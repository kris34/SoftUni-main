function words(array) {
  let map = new Map();

  let counter = 0;

  for (let i = 0; i < array.length;i++) {

    let currWord = array[i]

    for (let element of array) {
      if (currWord == element) {
        counter++;
      }
    }
    map.set(currWord, counter)

    counter = 0
  }
let sorted = Array.from(map.entries()).sort((a,b) => b[1] - a[1])

   for(let word of sorted){
       console.log(`${word[0]} -> ${word[1]} times`);
   }



}
words([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
