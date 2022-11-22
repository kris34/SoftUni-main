class Garden {
  constructor(spaceAvailable) {
    this.spaceAvailable = spaceAvailable;
    this.plants = [];
    this.storage = [];
  }

  addPlant(plantName, spaceRequired) {
    if (this.spaceAvailable < spaceRequired) {
      throw new Error('Not Enough space in the garden');
    }

    const plant = {
      plantName,
      spaceRequired,
      ripe: false,
      quantity: 0,
    };

    this.spaceAvailable -= spaceRequired;
    this.plants.push(plant);

    return `The ${plantName} has been successfully planted in the garden.`;
  }

    
}
