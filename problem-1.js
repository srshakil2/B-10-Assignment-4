// confution is ami jodi if ar  condition ar vitor 2ta peramiter number ki na chak korte cai tahole && naki ||

function calculateTax(income, expenses) {
  if ((income, expenses) < 0 || income < expenses) {
    return "Invalid Input";
  }
  const remain = income - expenses;
  const subresult = remain * 20;
  const result = subresult / 100;
  return result;
}

const callk = calculateTax(6000, -1500);
console.log(callk);
