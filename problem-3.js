function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  const splitI = name.split("");
  for (let i = 0; i < splitI.length; i++) {
    for (let j = 0; j < 10; j++) {
      if (j == splitI[i]) {
        return true;
      }
    }
  }
  return false;
}

//
const i = checkDigitsInName(["Raj5s"]);
console.log(i);
