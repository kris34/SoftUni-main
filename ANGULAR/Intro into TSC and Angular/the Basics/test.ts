function greet(name: string, date: number) {
  //console.log(`Hello ${name}, today is ${date}`);
}

function printNums(a: number, b: number) {
  for (let i = a; i < b; i++) {
    console.log(i);
  }
}

function basketballEquipment(input: number[]) {
  let tax = input[0];
  //console.log(tax);
}

interface ICar {
  make: string;
  model: string;
  year: string;
  mileage: number;
  specs: object;
}

function printCar(car: ICar) {
  console.log(
    `Todays car is ${car.make} with the following specs: ${car.specs}`
  );
}

/* printCar({
  make: 'alfa romeo',
  model: 'GT',
  year: '2007',
  mileage: 250000,
  specs: { radio: 'sony' },
}); */

interface SquareConfig {
  color: string;
  width: number;
}

function createSquare(config: SquareConfig) {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({ color: 'black', width: 100 });
//console.log(mySquare);

class Data {
  method: string;
  uri: string;
  version: string;
  message: string;
  response: string;
  fulfilled: boolean;

  constructor(method: string, uri: string, version: string, message: string) {
    this.method = method;
    (this.uri = uri), (this.version = version);
    this.message = message;
    this.response
    this.fulfilled = false;
  }
}

let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');

console.log(myData);

export {};
