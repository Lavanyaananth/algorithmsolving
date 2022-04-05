function countDigits(n, d) {
  let squared = [];
  let count = 0;
  squared = [...Array(n)].map((_, i) => i + 1);
  squared = squared
    .map((x) => x * x)
    .toString()
    .split("");
  let digit = d.toString();
  squared.map((item) => {
    item.includes(digit) ? (count += 1) : count;
  });
  return count;
}
console.log(countDigits(10, 1));
console.log(countDigits(25, 2));
console.log(countDigits(10, 1));
