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
