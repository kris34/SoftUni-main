function solve(input) {
  let email = input.shift();

  while (input[0] != 'Complete') {
    let tokens = input.shift().split(' ');

    if (tokens[1] == 'Upper') {
      email = makeUpper(email);
      console.log(email);
    } else if (tokens[1] == 'Lower') {
      email = makeLower(email);
      console.log(email);
    } else if (tokens[0] == 'GetDomain') {
      let domain = getDomain(email, Number(tokens[1]));
      console.log(domain);
    } else if (tokens[0] == 'GetUsername') {
      if (!email.includes('@')) {
        console.log(`The email ${email} doesn't contain the @ symbol.`);
      } else {
        console.log(getUsername(email));
      }
    } else if (tokens[0] == 'Replace') {
      email = replace(email, tokens[1]);
      console.log(email);
    } else if (tokens[0] == 'Encrypt') {
      console.log(encrypt(email));
    }
  }

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
    let result = '';
    for (let char of string) {
      if (char == '@') {
        return result;
      } else {
        result += char;
      }
    }
    return result;
  }

  function replace(string, char) {
    let result = '';

    for (let charakter of string) {
      if (charakter == char) {
        result += '-';
      } else {
        result += charakter;
      }
    }

    return result;
  }

  function encrypt(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
      result += `${string.charCodeAt(i)} `;
    }
    return result;
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
