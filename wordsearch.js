// Transpose function
const transpose = function(matrix) {
    const answerArray = [];
    // console.log(matrix[0])
    for (let index = 0; index < matrix[0].length; index++) {
    
      for (let element of matrix) {
        if (answerArray[index] === undefined) {
          answerArray[index] = [];
        }
        answerArray[index].push(element[index]);
      }
    }
    return answerArray;
  };
  // Reverse function
  const reverse = (s) => {
    return s.split("").reverse().join("");
  };
  
  //  IMPLEMENTATION CODE
  const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const vertical = transpose(letters);
    const verticalJoin = vertical.map(lrs => lrs.join(''));
    
    //Search word horizontally in both normal and reverse orders
    for (const l of horizontalJoin) {
      if (l.includes(word) || reverse(l).includes(word)) {
          return true;
      }
      
    }

    //Search word vertically in both normal and reverse orders
    for (const l of verticalJoin) {
      if (l.includes(word) || reverse(l).includes(word)) {
          return true;
      }
    }
  
    return false;
  };
  
//   const diagonalChange = (matrix) => {
//     let answerArray = [];
//     // X -> length array, then back down
//     // Just columns
//     for (let x = 0; x < matrix[0].length; x++) {
//       let currx = x;
//       //  To first
//       // for (let y = 0; y <= x; y++) {
//       //   if (answerArray[x] === undefined) {
//       //     answerArray[x] = [];
//       //   }
//       //   console.log('currx: ',currx, ' y: ', y);
//       //   answerArray[x].push(matrix[currx][y]);
//       //   currx--;
//       // }
//       // the otehr direction
      
//       let othercurrx = matrix.length - 1;
//       for (let y = matrix.length - 1; y >= matrix[0].length - x; y--) {
//         if (answerArray[x + matrix.length] === undefined) {
//           answerArray[x + matrix.length] = [];
//         }
//         console.log('otherdiag othercurrx: ',othercurrx, ' y: ', y);
//         console.log(matrix[othercurrx][y]);
//         answerArray[x + matrix.length].push(matrix[othercurrx][y]);
//         othercurrx--;
//       }
      
//     }
//     return answerArray;
  
//   };
  
  // wordSearch([
      //   ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  //   ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  //   ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  //   ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  //   ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  //   ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  //   ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  //   ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  //   ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  // ], 'SEINFELD');
  
  module.exports = wordSearch;