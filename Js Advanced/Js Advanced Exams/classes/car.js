class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (model.length < 1 || horsepower < 0 || price < 0 || mileage < 0) {
      throw new Error('Invalid input!');
    } else {
      this.availableCars.push({
        model: model,
        horsepower: horsepower,
        price: price,
        mileage: mileage,
      });
      return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
        2
      )} km - ${price.toFixed(2)}$
      `;
    }
  }

  sellCar(model, desiredMileage) {
   
   
  }
}
let dealership = new CarDealership('SoftAuto');
console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
console.log(dealership.addCar('', 120, 4900, 240000));
