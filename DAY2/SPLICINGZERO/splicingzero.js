const splicingzero = (arr) => {
  console.log(arr);
  for (let i = arr.length; i >= 0; i--) {
    arr[i] === 0 && arr.splice(i, 1) && arr.push(0);
  }
  return arr;
};
console.log(splicingzero([1, 2, 0, 3, 0, 4, 0]));
