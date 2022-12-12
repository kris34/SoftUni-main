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
    return string.substring(count);
  }

  console.log(getDomain(email));
}
solve([
  'Mike123@somemail.com',
  'Make Upper',
  'GetDomain 3',
  'GetUsername',
  'Encrypt',
  'Complete',
]);
