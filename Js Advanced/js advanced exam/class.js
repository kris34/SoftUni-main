class OnlineShop {
  constructor(warehouseSpace) {
    this.warehouseSpace = warehouseSpace;
    this.products = [];
    this.sales = [];
  }

  loadingStore(product, quantity, spaceRequired) {
    if (spaceRequired > this.warehouseSpace) {
      throw new Error('Not enough space in the warehouse.');
    } else {
      this.products.push({ product, quantity });
      this.warehouseSpace -= spaceRequired;
      return `The ${product} has been successfully delivered in the warehouse.`;
    }
  }

  quantityCheck(product, minimalQuantity) {
    let currProduct = this.products.find((v) => v.product == product);
    if (!currProduct) {
      throw new Error(`There is no ${product} in the warehouse.`);
    }

    if (minimalQuantity <= 0) {
      throw new Error('The quantity cannot be zero or negative.');
    }

    if (minimalQuantity <= currProduct.quantity) {
      return `You have enough from product ${product}.`;
    } else {
      let diff = Math.abs(currProduct.quantity - minimalQuantity);
      currProduct.quantity = diff;
      return `You added ${diff} more from the ${product} products.`;
    }


  }

  
}
const myOnlineShop = new OnlineShop(500);
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));
console.log(myOnlineShop.quantityCheck('TV', 40));
