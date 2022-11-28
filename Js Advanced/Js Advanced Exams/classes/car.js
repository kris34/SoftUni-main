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
      )} km - ${price.toFixed(2)}$ `;
    }
  }

  sellCar(model, desiredMileage) {
    if (!this.availableCars.some((v) => v.model == model)) {
      throw new Error(`${model} was not found!`);
    }

    let available = this.availableCars.filter((v) => v.model == model);

    let difference = Math.abs(available[0].mileage - desiredMileage);
    console.log(difference);
    if (available[0].mileage <= desiredMileage) {
      available[0].price = available[0].price;
    } else if (difference <= 40000) {
      available[0].price = (available[0].price * 95) / 100;
    } else if (difference > 40000) {
      available[0].price = (available[0].price * 90) / 100;
    }

    let index = this.availableCars.indexOf(available[0]);
    let horsepower = available[0].horsepower;
    let price = available[0].price;
    this.soldCars.push({ model, horsepower });
    this.availableCars.splice(index, 1);
    this.totalIncome += price;

    return `${model} was sold for ${price.toFixed(2)}$`;
  }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
