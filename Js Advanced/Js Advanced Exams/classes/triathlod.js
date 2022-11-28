class Triathlon {
  constructor(name) {
    this.name = name;
    this.participants = {};
    this.listOfFinalists = [];

  }

  addParticipant(participant, gender) {
    if (this.participants[participant] === undefined) {
      this.participants[participant] = gender;
      return `A new participant has been added - ${participant}`;
    } else {
      return `${participant} has already been added to the list`;
    }
  }

  completeness(participant, condition) {
    if (!this.participants[participant]) {
      return `${participant} is not in the current participants list`;
    }

    if (condition < 30) {
      throw new Error(
        `${participant} is not well prepared and cannot finish any discipline`
      );
    }

    let finishedDisciplinesCount = Math.floor(condition / 30);

    if (finishedDisciplinesCount > 0 && finishedDisciplinesCount < 3) {
      return `${participant} could only complete ${finishedDisciplinesCount} of the disciplines`;
    } else if (finishedDisciplinesCount === 3) {
      let participantGender = this.participants[participant];
      this.listOfFinalists.push({
        name: participant,
        gender: participantGender,
      });
      return `Congratulations, ${participant} finished the whole competition`;
    }
  }
  
  rewarding(participant) {
    let completed = this.listOfFinalists.some(
      (finalist) => finalist.name === participant
    );
    if (!completed) {
      return `${participant} is not in the current finalists list`;
    } else {
      return `${participant} was rewarded with a trophy for his performance`;
    }
  }

  showRecord(criteria) {
    if (this.listOfFinalists.length === 0) {
      return `There are no finalists in this competition`;
    }

    if (criteria === 'male' || criteria === 'female') {
      let finalistsByGender = this.listOfFinalists.filter(
        (finalist) => finalist.gender === criteria
      );
      if (finalistsByGender.length === 0) {
        return `There are no ${gender} finalists`;
      } else {
        return `${finalistsByGender[0].name} is the first ${criteria} that finished the ${this.name} triathlon`;
      }
    } else if (criteria === 'all') {
      let sortedFinalists = this.listOfFinalists.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      let result = [`List of all ${this.name} finalists:`];
      sortedFinalists.forEach((finalist) => {
        result.push(`${finalist.name}`);
      });

      return result.join('\n');
    }
  }
}

const contest = new Triathlon('Dynamos');
console.log(contest.addParticipant('Peter', 'male'));
console.log(contest.addParticipant('Sasha', 'female'));
console.log(contest.completeness('Peter', 100));
console.log(contest.completeness('Sasha', 90));
console.log(contest.rewarding('Peter'));
console.log(contest.rewarding('Sasha'));
console.log(contest.showRecord('all'));
