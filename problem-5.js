// akhane prothom peramiter jabe Array & 2 nam peramiter jabe hocche namber
function waitingTime(waitingTimes, serialNamber) {
  if (
    Array.isArray(waitingTimes) !== true ||
    typeof serialNamber !== "number"
  ) {
    return "Invalid Input";
  }
  let waitingTime = 0;
  for (let i of waitingTimes) {
    waitingTime += i;
  }
  const arrayAvaj = waitingTime / waitingTimes.length;
  const roundSum = Math.round(arrayAvaj);
  const waitCandited = serialNamber - 1;
  const wait = waitCandited - waitingTimes.length;
  const result = roundSum * wait;
  return result;
}

//
const roundabl = [7, 8, 3, 4, 5];
const serial = "9";
const calls = waitingTime(roundabl, serial);
console.log(calls);
