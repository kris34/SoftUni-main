class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error('Not Enough space in the garden.');
    }

    this.spaceAvailable -= spaceRequired;
    this.plants.push({
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    });

    return `The ${plantName} has been successfully planted in the garden.`;
  }

  ripenPlant(plantName, quantity) {
    const plant = this.plants.find((p) => p.plantName == plantName);
    if (!this.plants.includes(plant)) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe == true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error('The quantity cannot be zero or ngeative.');
    }

    plant.ripe = true;

    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName) {
    const plant = this.plants.find((p) => p.plantName == plantName);
    const index = this.plants.indexOf(plant);

    if (!this.plants.includes(plant)) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant.ripe == false) {
      throw new Error(
        `The ${plantName} cannot be harvested before it is ripe.`
      );
    }

    this.plants.splice(index, 1);

    this.storage.push({
      plantName,
      quantity: Number(plant.quantity),
    });

    this.spaceAvailable += plant.spaceRequired;

    return `The ${plantName} has been successfully harvested.`;
  }

  generateReport() {
    const plantAsString = this.plants
      .map((p) => p.plantName)
      .sort((a, b) => a.localeCompare(b));
    const row = `Plants in the garden: ${plantAsString.join(', ')}`;
    let storageRow = 'Plants in storage: The storage is empty.';

    if (this.storage.length > 0) {
      const storage = this.storage.map((p) => `${p.plantName} (${p.quantity})`);
      storageRow = `Plants in storage: ${storage.join(', ')}`;
    }

    return [
      `The garden has ${this.spaceAvailable} free space left.`,
      row,
      storageRow,
    ].join('\n');
  }
}
const myGarden = new Garden(250);
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('apple'));
console.log(myGarden.harvestPlant('olive'));
