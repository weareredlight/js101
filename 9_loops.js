const numbers = [1, 2, 3, 4, 5]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

sum == 15 // true

sum = 0
let i = 0
while (i < numbers.length) {
  sum += numbers[i]
  i++
}


// Arrays


// Objects

const obj = {a: 1, b: 2, c: 3};

for (const key in obj) {
  console.log(`obj.${key} = ${obj[key]}`);
}

// OR

// Object.entries(obj) contains
// [['a', 1], ['b', 2], ['c', 3]]
Object.entries(obj).forEach(function(entry) {
  const key = entry[0];
  const value = entry[1];
  console.log(`obj.${key} = ${value}`)
})

// OR

// Object.values(obj) contains
// [1, 2, 3]
Object.values(obj).forEach(function(value) {
  console.log(value)
})
