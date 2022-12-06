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

  makeTheOrder(meal) {
    if (this.menu.hasOwnProperty(meal) == false) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    if (this.menu.hasOwnProperty(meal)) {
      let currMeal = this.menu[meal];
      let needed = Object.values(currMeal)[0];
      
    }
  }
}
let kitchen = new Restaurant(1000);
kitchen.loadProducts([
  'Yogurt 30 3',
  'Honey 50 4',
  'Strawberries 20 10',
  'Banana 5 1',
]);
kitchen.addToMenu(
  'frozenYogurt',
  ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'],
  9.99
);
console.log(kitchen.makeTheOrder('frozenYogurt'));
