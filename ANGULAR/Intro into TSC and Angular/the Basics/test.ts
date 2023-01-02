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

printCar({
  make: 'alfa romeo',
  model: 'GT',
  year: '2007',
  mileage: 250000,
  specs: { radio: 'sony' },
});

export {};
