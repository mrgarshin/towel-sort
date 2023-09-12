
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resultArr = [];
  for (let i in matrix) {
      if(i % 2 === 0) {
          matrix[i].forEach(j => {
              resultArr.push(j)
          })
      } else {
        matrix[i].reverse().forEach(k=> {
          resultArr.push(k)
        })
      }
      
  }
  return resultArr;
  // let result = [];
  // for (let i in matrix) {
  //   if (i%2 === 0) {
  //     for (let j in matrix[i]) {
  //       result.push(matrix[i][j]);
  //     }
  //   } else {
  //     for ( let y = matrix[i].length-1; y >= 0; y--) {
  //       result.push(matrix[i][y])
  //     }
  //   }
  // }
  // return result;
}
