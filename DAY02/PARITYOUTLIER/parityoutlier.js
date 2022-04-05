const parityoutlier = (arr) => {
  const odd = arr.filter((num) => num % 2 !== 0);
  const even = arr.filter((num) => num % 2 === 0);
  return odd.length === 1 ? odd[0] : even[0];
};
console.log(parityoutlier([2, 4, 100, 4, 11, 2602, 36]));
console.log(parityoutlier([160, 3, 1719, 19, 11, 13, -21]));
