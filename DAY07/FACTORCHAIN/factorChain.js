const factorChain = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % arr[i] !== 0) {
      return false;
    }
  }
  return true;
};
console.log(factorChain([1, 2, 4, 8, 16, 32]));
console.log(factorChain([1, 1, 1, 1, 1, 1]));
console.log(factorChain([2, 4, 6, 7, 12]));
console.log(factorChain([10, 1]));
