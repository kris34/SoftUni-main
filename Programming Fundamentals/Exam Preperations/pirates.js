function solve(input) {
  let result = {};

  while (input[0] != 'Sail') {
    let tokens = input.shift().split('||');
    let city = tokens[0];
    let population = Number(tokens[1]);
    let gold = Number(tokens[2]);

    if (result.hasOwnProperty(city)) {
      result[city].gold += Number(gold);
      result[city].population += Number(population);
    } else {
      result[city] = {
        population,
        gold,
      };
    }
  }
  input.shift();

  while (input[0] != 'End') {
    let tokens = input.shift().split('=>');
    let city = tokens[1];

    if (tokens[0] == 'Plunder') {
      result[city].population -= tokens[2];
      result[city].gold -= tokens[3];
      console.log(
        `${city} plundered! ${tokens[3]} gold stolen, ${tokens[2]} citizens killed.`
      );
      if (result[city].population == 0 || result[city].gold == 0) {
        console.log(`${city} has been wiped off the map!`);
        delete result[city];
      }
    } else if (tokens[0] == 'Prosper') {
      if (tokens[2] < 0) {
        console.log('Gold added cannot be a negative number!');
        continue;
      }
      result[tokens[1]].gold += tokens[2];
      console.log(
        `${tokens[2]} gold added to the city treasury. ${tokens[1]} now has ${
          result[tokens[1].gold]
        } gold.`
      );
    }
  }
}
solve([
  'Nassau||95000||1000',
  'San Juan||930000||1250',
  'Campeche||270000||690',
  'Port Royal||320000||1000',
  'Port Royal||100000||2000',
  'Sail',
  'Prosper=>Port Royal=>-200',
  'Plunder=>Nassau=>94000=>750',
  'Plunder=>Nassau=>1000=>150',
  'Plunder=>Campeche=>150000=>690',
  'End',
]);
