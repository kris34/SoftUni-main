function solve(arr) {
  let key = arr.shift();

  while (arr[0] != 'Generate') {
    let [command] = arr.shift().split('>>>')[0];
  }

  function contains(string, substring) {
    if (string.includes(substring)) {
      console.log(`${string} contains ${substring}`);
    } else {
      console.log('Substring not found!');
    }
  }

  function Flip() { 
    
  }

  let test = "test"
  contains(test, "es")
}
solve([
  '134softsf5ftuni2020rockz42',
  'Slice>>>3>>>7',
  'Contains>>>-rock',
  'Contains>>>-uni-',
  'Contains>>>-rocks',
  'Flip>>>Upper>>>2>>>8',
  'Flip>>>Lower>>>5>>>11',
  'Generate',
]);
