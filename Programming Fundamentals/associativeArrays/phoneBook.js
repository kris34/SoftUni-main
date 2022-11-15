function phoneBook(array) {
    let phonebook = {}
    
    for(let element of array){
        let tokens = element.split(" ")
        let name =  tokens[0]
        let phone = tokens[1]
        phonebook[name] = phone
        
    }
    
    for(let key in phonebook){
        console.log(`${key} -> ${phonebook[key]}`);
    }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
