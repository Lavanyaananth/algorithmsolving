const countDigits = (num, digit) => {
  let arr = [];
  let count = 0;
  digit = digit.toString();
  arr = [...Array(num)].map((_, i) => i + 1);
  arr = arr
    .map((x) => x * x)
    .toString()
    .split("");
  arr = arr.map((item) => {
    item.includes(digit) ? (count += 1) : count;
  });
  return count;
};
console.log(countDigits(10, 1));
console.log(countDigits(25, 2));
console.log(countDigits(10, 2));
