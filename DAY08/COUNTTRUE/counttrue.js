const countTrue = (arr) => {
  let filtered = arr.filter((item) => item === true);
  console.log(filtered);
  return filtered.length;
};
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false]));
