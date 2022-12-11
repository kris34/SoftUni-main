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
      if (Number(tokens[2]) < 0) {
        console.log('Gold added cannot be a negative number!');
        continue;
      }
      result[city].gold += Number(tokens[2]);
      console.log(
        `${tokens[2]} gold added to the city treasury. ${tokens[1]} now has ${
          result[tokens[1]].gold
        } gold.`
      );
    }
  }

  let cities = Object.entries(result);
  if (cities.length == 0) {
    console.log(
      'Ahoy, Captain! All targets have been plundered and destroyed!'
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${cities.length} wealthy settlements to go to:`
    );
    for (let city of cities) {
      console.log(
        `${city[0]} -> Population: ${city[1].population} citizens, Gold: ${city[1].gold} kg`
      );
    }
  }
}
solve([
  'Tortuga||345000||1250',
  'Santo Domingo||240000||630',
  'Havana||410000||1100',
  'Sail',
  'Plunder=>Tortuga=>75000=>380',
  'Prosper=>Santo Domingo=>180',
  'End',
]);
