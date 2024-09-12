// akhane prothom peramiter jabe Array & 2 nam peramiter jabe hocche namber
function waitingTime(waitingTimes, serialNumber) {
  if (
    Array.isArray(waitingTimes) !== true ||
    typeof serialNumber !== "number"
  ) {
    return "Invalid Input";
  }
  let waitingTime = 0;
  for (let i of waitingTimes) {
    waitingTime += i;
  }
  const arrayAvaj = waitingTime / waitingTimes.length;
  const roundSum = Math.round(arrayAvaj);
  const waitCandited = serialNumber - 1;
  const wait = waitCandited - waitingTimes.length;
  const result = roundSum * wait;
  return result;
}

//
const roundabl = [3, 5, 7, 11, 6];
const serial = 10;
const calls = waitingTime(roundabl, serial);
console.log(calls);
