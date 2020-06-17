const numbers = [2, 4, 6, 8, 10];

function double(v) {
  return v * 2;
}

const doubledNumbers = numbers.map(double);
// doubledNumbers contains [4, 8, 12, 16, 20]
// numbers contains [2, 4, 6, 8, 10] - NO CHANGES!


// Sample map implementation

function map(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  return newArr;
}

// map([2, 4, 6, 8, 10], v => v * 2)
