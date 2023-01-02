interface IAutomobile {
  make: string;
  year: number;
  horsepower: number;
  new: boolean;
}

const alfaRomeo: IAutomobile = {
  make: 'GT',
  year: 2007,
  horsepower: 150,
  new: true,
};

console.log(alfaRomeo);

export {};
