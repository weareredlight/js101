/*
  Anonymous functions
*/

function () {
  return "bar";
}

// arrow notation
() => {
  return "bar";
}


/*
  Named functions
*/

function foo() {
  return "bar";
}

const foo = function () {
  return "bar";
}

// Using the arrow notation
const foo = () => {
  return "bar";
}


/*
  Nested declaration
*/

function foo() {
  function bar() {
    return "inception"
  }
  return bar();
}
