const indexMultiplier = (arr) => {
  let result = arr.reduce((acc, item, index) => {
    return (acc += item * index);
  }, 0);
  console.log(result);
};
indexMultiplier([1, 2, 3, 4, 5]); //40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

indexMultiplier([-3, 0, 8, -6]); // -2
// (-3*0 + 0*1 + 8*2 + -6*3)

//second

const trace = (matrix) => {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j) {
        sum = sum + matrix[i][j];
      }
    }
  }

  console.log(sum);
};

trace([
  [1, 4],
  [4, 1],
]); // 2

// 1 + 1 = 2

trace([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); // 15

// 1 + 5 + 9 = 15

trace([
  [1, 0, 1, 0],
  [0, 2, 0, 2],
  [3, 0, 3, 0],
  [0, 4, 0, 4],
]); //10

// 1 + 2 + 3 + 4 = 10
