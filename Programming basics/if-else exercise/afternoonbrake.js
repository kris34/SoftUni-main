function afternoonBreak(input) {
  let serialName = input[0];
  let episodeMin = Number(input[1]);
  let breakMin = Number(input[2]);

  let lunchTime = breakMin / 8;
  let relaxTime = breakMin / 4;
  let breakTimeLeft = breakMin - lunchTime - relaxTime;

  if (breakTimeLeft >= episodeMin) {
    let diff = breakTimeLeft - episodeMin;
    console.log(
      `You have enough time to watch ${serialName} and left with ${Math.ceil(
        diff
      )} minutes free time.`
    );
  } else {
    let diff = episodeMin - breakTimeLeft;
    console.log(`You don't have enough time to watch ${serialName}, you need ${Math.ceil(
      diff
    )} more minutes.
`);
  }
}
afternoonBreak(["Teen Wolf", "48", "60"]);
