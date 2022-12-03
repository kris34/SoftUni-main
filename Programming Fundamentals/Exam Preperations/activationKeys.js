function solve(input) {
  let key = input.shift();

  while (input[0] != 'Generate') {
    let tokens = input.shift().split('>>>');
    let command = tokens[0];

    if (command == 'Contains') {
      contain(key, tokens[1]);
    } else if (command == 'Slice') {
      key = slice(key, Number(tokens[1]), Number(tokens[2]));
      console.log(key);
    } else if (command == 'Flip') {
      key = flip(key, tokens[1], Number(tokens[2]), Number(tokens[3]));
      console.log(key);
    }
  }
  console.log(`Your activation key is: ${key}`);

  function contain(string, substring) {
    if (string.includes(substring)) {
      console.log(`${string} contains ${substring}`);
    } else {
      console.log(`Substring not found!`);
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
    return string;
  }

  function slice(string, start, end) {
    let first = string.substr(0, start);
    let second = string.substring(end, string.length);
    string = first + second;
    return string;
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
