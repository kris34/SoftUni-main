class CarDealership {
  constructor(name) {
    this.name = name;
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
  }

  addCar(model, horsepower, price, mileage) {
    if (
      typeof model == 'string' &&
      model != '' &&
      typeof horsepower == 'number' &&
      horsepower >= 0 &&
      typeof price == 'number' &&
      price >= 0 &&
      typeof mileage == 'number' &&
      mileage >= 0
    ) {
      this.availableCars.push({
        model: model,
        horsepower: horsepower,
        price: price,
        mileage: mileage,
      });
      return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(
        2
      )} km - ${price.toFixed(2)}$`;
    } else {
      throw Error('Invalid input!');
    }
  }

  sellCar(model, desiredMileage) {
    if (!this.availableCars.some((v) => v.model == model)) {
      throw new Error(`${model} was not found!`);
    }

    let available = this.availableCars.filter((v) => v.model == model);

    let difference = Math.abs(available[0].mileage - desiredMileage);
    // console.log(difference);
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
    this.soldCars.push({ model, horsepower, price });
    this.availableCars.slice(index, 1);
    this.totalIncome += price;

    return `${model} was sold for ${price.toFixed(2)}$`;
  }

  currentCar() {
    if (this.availableCars.length == 0) {
      return 'There are no available cars';
    }

    let result = ['-Available cars:'];
    this.availableCars.forEach((c) =>
      result.push(
        `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(
          2
        )} km - ${c.price.toFixed(2)}$`
      )
    );

    return result.join('\n');
  }

  salesReport(criteria) {
    if (criteria == 'horsepower') {
      this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
    } else if (criteria == 'model') {
      this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
    } else {
      throw new Error('Invalid criteria!');
    }

    let result = [
      `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
      `-${this.soldCars.length} cars sold:`,
    ];

    this.soldCars.forEach((c) =>
      result.push(`---${c.model} - ${c.horsepower} HP - ${c.price.toFixed(2)}$`)
    );

    return result.join('\n');
  }
}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
