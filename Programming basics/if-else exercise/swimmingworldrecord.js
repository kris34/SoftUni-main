function worldRecord(input) {
  let recordInSec = Number(input[0]);
  let distanceInM = Number(input[1]);
  let timeInSecForOneM = Number(input[2]);

  let delay = Math.floor(distanceInM / 15);
  let delayInSec = delay * 12.5;
  let totalTime = distanceInM * timeInSecForOneM + delayInSec;

  if (totalTime < recordInSec) {
    console.log(
      `Yes, he succeeded! The new world record is ${totalTime.toFixed(
        2
      )} seconds.`
    );
  } else {
    let diff = totalTime - recordInSec;
    console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
  }
}
worldRecord(["10464", "1500", "20"]);
