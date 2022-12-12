function solve(input) {
  let list = {};

  while (input[0] != 'Go Shopping') {
    let tokens = input.shift().split('->');
    //  console.log(tokens);
    let command = tokens[0];

    if (command == 'Add') {
      let products = tokens[2].split(',');
      let shop = tokens[1];

      for (let product of products) {
        if (!list[shop]) {
          list[shop] = [];
        }
        if (Object.values(list).filter((v) => v.includes(product)).length > 0) {
          continue;
        }
        list[shop].push(product);
      }
    } else if (command == 'Important') {
      let shop = tokens[1];
      let product = tokens[2];

      if (Object.values(list).filter((v) => v.includes(product)).length > 0) {
        continue;
      }

      if (!list[shop]) {
        list[shop] = [];
        list[shop].push(product);
        list[shop].important = true;
      } else {
        list[shop].unshift(product);
        list[shop].important = true;
      }
    } else if (command == 'Remove') {
      let shop = tokens[1];
      if (list[shop] == undefined || list[shop].important) {
        continue;
      } else {
        delete list[shop];
      }
    }
  }

  let entries = Object.entries(list);
  let result = [];
  for (let entry of entries) {
    
    result.push(`${entry[0]}:`);
    entry[1].forEach((p) => result.push(` - ${p}`));
  }
  console.log(result.join('\n'));
}
solve([
  'Add->Grocery->Dried-fruit,Nuts,Lemons',
  'Add->Market->Nuts,Juice',
  'Important->Market->Snack',
  'Remove->Market',
  'Go Shopping',
]);
