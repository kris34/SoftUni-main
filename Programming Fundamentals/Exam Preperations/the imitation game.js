function solve(arr) {
  let word = arr.shift();

  while (arr[0] != 'Decode') {
    let [command, param1, param2] = arr.shift().split('|');

    if (command == 'ChangeAll') {
      word = changeAll(word, param1, param2);
    } else if (command == 'Insert') {
      word = insert(word, param1, param2);
    } else if (command == 'Move') {
      word = move(word, param1);
    }
  }

  console.log(`The decrypted message is: ${word}`);
  function changeAll(word, oldChar, newChar) {
    let result = '';

    for (let char of word) {
      if (char == oldChar) {
        char = newChar;
      }
      result += char;
    }
    return result;
  }

  function insert(word, index, char) {
    let arr = word.split('');
    arr.splice(index, 0, char);
    let result = arr.join('');
    return result;
  }

  function move(word, n) {
    const firstThree = word.substring(0, n);
    word = word.substring(n);
    const result = word + firstThree;
    return result;
  }
}
solve(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']);
