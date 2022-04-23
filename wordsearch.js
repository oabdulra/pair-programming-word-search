const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        } 
    }
    const verticalTranspose = transpose(letters);
    const verticalJoin = verticalTranspose.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) {
            return true;
        }
    }

    const horizontalJoinReverse = letters.map(ls => ls.reverse().join(''));
    console.log(horizontalJoinReverse)
    for (l of horizontalJoinReverse) {
        if (l.includes(word)) {
            return true
        } 
    }
    const verticalJoinReverse = verticalTranspose.map(ls => ls.reverse().join(''));
    for (l of verticalJoinReverse) {
        if (l.includes(word)) {
            return true;
        }
    }
    return false;
}

// Matrix Transposition code:
const transpose = function(matrix) {
	let newMatrix = [];

  for (let j = 0; j < matrix[0].length; j++) { //Find the number of sub-arrays 
    newMatrix.push([]);
    }

	for (let i = 0; i < matrix.length; i++) { // will go through each array one at a time
  	for (let n = 0; n < matrix[i].length; n++){ //will go through each index in each array, one array at a time
     newMatrix[n].push(matrix[i][n])
    }
  }

  return newMatrix;
};

module.exports = wordSearch;