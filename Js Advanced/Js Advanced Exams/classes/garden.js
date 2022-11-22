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

  ripenPlant(plantName, quantity) {
    const plant = this.plants.find((p) => p.plantName == plantName);

    if (!this.plants.includes(plant[plantName])) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if (plant[plantName].ripe == true) {
      throw new Error(`The ${plantName} is already ripe.`);
    }

    if (quantity <= 0) {
      throw new Error('The quantity cannot be zero or ngeative.');
    }

    plant[plantName].ripe = true;

    if (quantity == 1) {
      return `${quantity} ${plantName} has successfully ripened.`;
    } else {
      return `${quantity} ${plantName}s have successfully ripened.`;
    }
  }

  harvestPlant(plantName){ 
    const plant = this.plants.find((p) => p.plantName == plantName);

    if (!this.plants.includes(plant[plantName])) {
      throw new Error(`There is no ${plantName} in the garden.`);
    }

    if(plant[plantName].ripe == false){ 
        throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
    }

    
  }


}
