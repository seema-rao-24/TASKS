/* let d = new Date();
console.log(d);
console.log(` ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} `); */

/* let dateNum = d.getDay();
console.log(dateNum);
function convertToDay() {
  if (dateNum == 1) {
    return "Monday";
  } else if (dateNum == 2) {
    return "Tuesday";
  } else if (dateNum == 3) {
    return "Wednesday";
  } else if (dateNum == 0) {
    return "Sunday";
  }
}
let completeDay = convertToDay();
console.log(completeDay); */


//console.log(Math.floor(randomNumber));//to round off to previous number

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function (e) {
let randomNumber = Math.random()*100000;
let roundoff = Math.floor(randomNumber);
document.getElementById('otpvalue').value = roundoff;
});