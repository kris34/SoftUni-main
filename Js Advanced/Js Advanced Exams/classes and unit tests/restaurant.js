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
}
let kitchen = new Restaurant(1000);
console.log(
  kitchen.loadProducts([
    'Banana 10 5',
    'Banana 20 10',
    'Strawberries 50 30',
    'Yogurt 10 10',
    'Yogurt 500 1500',
    'Honey 5 50',
  ])
);
