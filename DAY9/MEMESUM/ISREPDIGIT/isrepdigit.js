const isRepdigit = (num) => {
  if (num < 0) {
    return false;
  }
  if (num === 0) {
    return true;
  }
  let splitted = num.toString().split("");
  console.log(splitted);
  for (let i = 0; i < splitted.length; i++) {
    return splitted[i + 1] === splitted[i] ? true : false;
  }
  return splitted;
};
console.log(isRepdigit(11));
console.log(isRepdigit(0));
console.log(isRepdigit(-11));
