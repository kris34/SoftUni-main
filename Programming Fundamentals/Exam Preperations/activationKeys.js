function solve(arr) {
  let key = arr.shift();

  while (arr[0] != 'Generate') {
    let [command, param1, param2, param3] = arr.shift().split('>>>');

    if (command == 'contains') {
      contains(key, param1);
    }
  }

  function contains(string, substring) {
    if (string.includes(substring)) {
      console.log(`${string} contains ${substring}`);
    } else {
      console.log('Substring not found!');
    }
  }

  function flip(string, command, start, end) {
    let substr = string.substring(start, end);
    let changed;
    if (command == 'Upper') {
      changed = substr.toUpperCase();
      string = string.replace(substr, changed);
    } else {
      changed = substr.toLowerCase();
      string = string.replace(substr, changed);
    }
    console.log(string);
  }

  function slice(string, start, end) {
    let first = string.substr(0, start);
    let second = string.substring(end, string.length);
    string = first + second;
    console.log(string);  
  }

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
