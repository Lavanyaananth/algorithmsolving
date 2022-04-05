function arrayOfMultiples(num, length) {
  let x = 1;
  let result = [];
  for (let i = 1; i <= length; i++) {
    result.push(x * num);
    x++;
  }
  return result;
}
console.log(arrayOfMultiples(7, 5));
console.log(arrayOfMultiples(12, 10));
console.log(arrayOfMultiples(2, 10));
