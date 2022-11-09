function toyShop(input) {
  let tripPrice = Number(input[0]);
  let puzzleCount = Number(input[1]);
  let dollCount = Number(input[2]);
  let bearCount = Number(input[3]);
  let minionsCount = Number(input[4]);
  let truckCount = Number(input[5]);

  let totalToyCount =
    puzzleCount + dollCount + bearCount + minionsCount + truckCount;
  let totalToyPrice =
    puzzleCount * 2.6 +
    dollCount * 3 +
    bearCount * 4.1 +
    minionsCount * 8.2 +
    truckCount * 2;

  if (totalToyCount >= 50) {
    totalToyPrice = totalToyPrice * 0.75;
  }
  totalToyPrice = totalToyPrice * 0.9;
  let diff = Math.abs(totalToyPrice - tripPrice);

  if (totalToyPrice >= tripPrice) {
    console.log(`Yes! ${diff.toFixed(2)} lv left.`);
  } else {
    console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`);
  }
}
toyShop(["320", "8", "2", "5", "5", "1"]);
