function solve(arr) {
  const n = arr.shift();

  let pieces = {};

  for (let i = 0; i < n; i++) {
    let [piece, composer, key] = arr.shift().split('|');

    pieces[piece] = {
      composer,
      key,
    };
  }

  //console.log(arr);

  while (arr[0] != 'Stop') {
    let [command, pieceName, param2, param3] = arr.shift().split('|');

    if (command == 'Add') {
      if (pieces[pieceName]) {
        console.log(`${pieceName} is already in the collection!`);
        continue;
      }
      pieces[pieceName] = {
        param2,
        param3,
      };
      console.log(
        `${pieceName} by ${param2} in ${param3} added to the collection!`);
    } else if (command == 'Remove') {
      if (pieces[pieceName]) {
        delete pieces[pieceName];
        console.log(`Successfully removed ${pieceName}!`);
      } else {
        console.log(
          `Invalid operation! ${pieceName} does not exist in the collection.`);
      }
    } else if (command == 'ChangeKey') {
      if (pieces[pieceName]) {
        pieces[pieceName] = pieces[param2];
        console.log(`Changed the key of ${pieceName} to ${param2}!`);
      } else {
        console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
      }
    }
  }


}
solve([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop',
]);
