function storage(array) {
  let map = new Map();

  for(let element of array){
    let splitted = element.split(" ")
    let product = splitted[0]
    let quantity = Number(splitted[1])
    if(!map.has(product)){
        map.set(product,+quantity)
    }else{
        let currQuant = map.get(product)
        let newQuant = currQuant += quantity
        map.set(product, newQuant)
    }


  }

  for(let element of map){
      console.log(`${element[0]} -> ${element[1]}`);
  }

}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
