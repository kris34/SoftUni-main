function adressBook(array) {
    let adresses = {}
    for(let element of array){
       let [name, adress] = element.split(":")
    adresses[name] = adress
    }
    let toArray = Object.entries(adresses)

    toArray.sort()
       
    for(let element of toArray){
        let[name, adress] = element
        toArray[name] = adress
      console.log(`${name} -> ${toArray[name]}`);
    }

}

adressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
