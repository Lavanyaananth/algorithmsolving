const forminghighestnum = (arr) => {
  //sorting
  let result = arr
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");
  return result;
};
console.log(forminghighestnum([1, 2, 3, 4, 5, 0, 9]));
console.log(forminghighestnum([3, 6, 0, 99]));
console.log(forminghighestnum([1, 34, 3, 98, 9, 76, 45, 4]));
