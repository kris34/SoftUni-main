function smallestNumbber(input) {
  let element = input[0];
  let index = 1;

  let min = Number.MAX_SAFE_INTEGER;

  while (element !== "Stop") {
    let num = Number(element);

    if (num < min) {
      min = num;
    }

    element = input[index];
    index++;
  }

  console.log(min);
}
smallestNumbber(["-10", "20", "-30", "Stop"]);
