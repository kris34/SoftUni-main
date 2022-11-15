function studentGrades(array) {
  let list = {};

  for (let token of array) {
    let tokens = token.split(" ");
    let name = tokens.shift();
    let grades = tokens.map(Number);

    if (!list.hasOwnProperty(name)) {
      list[name] = [];
    } 

    for (let grade of grades) {
      list[name].push(grade)
    }
  }
  let names = Object.keys(list)
  names.sort((a,b) => a.localeCompare(b))


  function avgGrade(grades) {
    let sum = 0;
    let average = 0;
    for (let grade of grades) {
      sum += grade;
      average = sum / grades.length;
    }

    return average;
  }

  for (let kvp of names) {
    console.log(`${kvp}: ${avgGrade(list[kvp]).toFixed(2)}`);
  }
}
studentGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
