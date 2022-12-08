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
  console.log(result);
  while (input[0] != 'End') {
    let tokens = input.shift().split('=>');
    console.log(tokens);
    if (tokens[0] == 'Plunder') {
      result[tokens[1]].population -= tokens[2];
      result[tokens[1]].gold -= tokens[3];  
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
