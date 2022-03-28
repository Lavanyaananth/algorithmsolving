function oddishOrEvenish(num) {
  num = num
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    });
  console.log(num);
  return num % 2 === 0 ? "evenish" : "oddish";
}
console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
