function agetodays(age) {
  let leapyears = Math.ceil(age / 4);
  let days = age * 365 + leapyears;
  return age === 0 ? age : days;
}

console.log(agetodays(65));
console.log(agetodays(0));
console.log(agetodays(20));
