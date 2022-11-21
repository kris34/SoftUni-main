function solve(arr) {
  let filtered = [];
  for(let i = 0; i < arr.length;i++){
     if(i % 2 == 1){
         filtered.push(arr[i])
     }
  }
  let result = [];
  for (let i = 0; i < filtered.length; i++) {
    result.push((filtered[i] *= 2));
  }
  return result.reverse()
}
solve([3, 0, 10, 4, 7, 3]);

/* function solve(arr) {
    let found = arr
      .filter((el, i) => i % 2 !== 0)
      .map((el) => el * 2)
      .reverse();
      console.log(found);
    return found;
  }
  solve([10, 15, 20, 25]); */
