function secondLargest(arr) {
  let result = arr.sort(function (a, b) {
    return b - a;
  });
  return result[1];
}
console.log(secondLargest(["20", "120", "111", "215", "54", "78"]));
console.log(secondLargest(["100", "500", "678", "800", "400", "900"]));
