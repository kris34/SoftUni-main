function solve(input) {
  let email = input.shift();

  // while (input[0] != 'Complete') {}

  function makeUpper(string) {
    return string.toUpperCase();
  }

  function makeLower(string) {
    return string.toLowerCase();
  }

  function getDomain(string, count) {
    return string.slice(-count);
  }

  function getUsername(string) {
    let result;
    for (let char of string) {
      if (char == '@') {
        return result;
      } else {
        result += char;
      }
    }
  }

  
}
solve([
  'Mike123@somemail.com',
  'Make Upper',
  'GetDomain 3',
  'GetUsername',
  'Encrypt',
  'Complete',
]);
