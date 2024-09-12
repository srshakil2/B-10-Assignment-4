// ------

function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
  const result = obj.testScore + obj.schoolGrade;
  if (obj.isFFamily === true && result >= 60) {
    return true;
  } else if (obj.isFFamily !== true && result >= 80) {
    return true;
  }
  return false;
}

//
const rslt = calculateFinalScore({
  name: "Rajib",
  testScore: 15,
  schoolGrade: 25,
  isFFamily: false,
});

console.log(rslt);
