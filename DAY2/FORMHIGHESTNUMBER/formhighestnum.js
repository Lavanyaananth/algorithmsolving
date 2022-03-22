const forminghighestnum = (arr) => {
  //sorting
  arr.sort(function (a, b) {
    return b - a;
  });
  console.log(arr);
  //forming number
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    num = num * 10 + arr[i];
  }
  return num;
};
console.log(forminghighestnum([1, 2, 3, 4, 5, 0, 9]));
console.log(forminghighestnum([3, 6, 0, 9]));
console.log(forminghighestnum([1, 34, 3, 98, 9, 76, 45, 4]));
