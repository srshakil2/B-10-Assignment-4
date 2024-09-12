// akhne amke input hisabe akti gmail  nite hobe
// out return korte hobe ussarname & domain name akhne majh khaner @ bad dite hobe..
function sendNotification(email) {
  if (typeof email !== "string" || email.includes("@") !== true) {
    return "Invalid Email";
  }
  const emails = email.split("@");
  const result = emails.join(" " + "send you an email from" + " ");
  return result;
}
const r = sendNotification("sadia8icloud.com");
console.log(r);
