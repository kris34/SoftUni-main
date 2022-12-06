class Restaurant {
  constructor(budget) {
    this.budget = budget;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    while (products.length > 0) {
      let [name, quantity, totalPrice] = products.shift().split(' ');

      quantity = Number(quantity);
      totalPrice = Number(totalPrice);

      if (this.stockProducts.hasOwnProperty(name)) {
        if (this.budget >= totalPrice) {
          this.stockProducts[name].quantity += Number(quantity);
          this.budget -= totalPrice;
          this.history.push(`Successfully loaded ${quantity} ${name}`);
        } else {
          this.history.push(
            `There was not enough money to load ${quantity} ${name}`
          );
        }
      } else {
        if (this.budget >= totalPrice) {
          this.stockProducts[name] = {
            quantity,
          };
          this.history.push(`Successfully loaded ${quantity} ${name}`);
        } else {
          this.history.push(
            `There was not enough money to load ${quantity} ${name}`
          );
        }
      }
    }
    return this.history.join('\n');
  }

  addToMenu(meal, neededProducts, price) {
    price = Number(price);
    if (this.menu[meal]) {
      return `The ${meal} is already in the our menu, try something different.`;
    } else {
      this.menu[meal] = {
        neededProducts,
        price,
      };
    }

    if (Object.keys(this.menu).length == 1) {
      return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
    } else {
      return `Great idea! Now with the ${meal} we have ${
        Object.keys(this.menu).length
      } meals in the menu, other ideas?`;
    }
  }

  showTheMenu() {
    let menuEntries = Object.entries(this.menu);
    if (menuEntries.length == 0) {
      return 'Our menu is not ready yet, please come later...';
    } else {
      let result = [];
      for (let entry of menuEntries) {
        result.push(`${entry[0]} - $ ${entry[1].price}`);
      }
      return result.join('\n');
    }
  }
}
let kitchen = new Restaurant(1000);
console.log(
  kitchen.addToMenu(
    'frozenYogurt',
    ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'],
    9.99
  )
);
console.log(
  kitchen.addToMenu(
    'Pizza',
    [
      'Flour 0.5',
      'Oil 0.2',
      'Yeast 0.5',
      'Salt 0.1',
      'Sugar 0.1',
      'Tomato sauce 0.5',
      'Pepperoni 1',
      'Cheese 1.5',
    ],
    15.55
  )
);

console.log(kitchen.showTheMenu());
