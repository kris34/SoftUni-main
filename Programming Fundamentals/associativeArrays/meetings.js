function meetings(array) {
  let list = {};

  for (let element of array) {
    let info = element.split(" ");
    let day = info[0];
    let name = info[1];
    if(list.hasOwnProperty(day)){
        console.log(`Conflict on ${day}!`);
    }else{
        list[day] = name;
        console.log(`Scheduled for ${day}`);
    }
    
  }
   for(let day in list){
       console.log(`${day} -> ${list[day]}`);
   }

}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
