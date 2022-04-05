function sortContent(elem) {
  elem.sort(function (a, b) {
    return a - b;
  });
  return elem;
}
console.log(sortContent([4, 1, 3]));
console.log(sortContent([[4], [1], [3]]));
console.log(sortContent([4, [1], 3]));
console.log(sortContent([[4], 1, [3]]));
console.log(sortContent([[3], 4, [2], [5], 1, 6]));
let numbers = [5, 7, 2, 1, 3];

numbers = [a, b, c, ...rest];
console.log(a); // 5
console.log(b); // 7
console.log(c); // 2
console.log(rest); // [1, 3]
