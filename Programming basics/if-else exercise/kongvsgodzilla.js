function kongvsgodzilla(input) {
  let budget = Number(input[0]);
  let extrasCount = Number(input[1]);
  let clothingPrice = Number(input[2]);

  let decor = budget * 0.1;
  let moneyForClothing = clothingPrice * extrasCount;

  if (extrasCount > 150) {
    moneyForClothing = moneyForClothing * 0.9;
  }

  let totalPrice = decor + moneyForClothing;
  let diff = Math.abs(budget - totalPrice);

  if (totalPrice > budget) {
    console.log("Not enough money!");
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
  } else if (totalPrice <= budget) {
    console.log("Action!");
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
  }
}
kongvsgodzilla(["15437.62", "186", "57.99"]);
