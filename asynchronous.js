
// Declare the "request" function
function request(callback) {
  setTimeout(function() { // simulate I/O
    callback("Server response")
  }, 3000)
}

console.log("Debug 1")

// call "request" and pass a callback function
request(function(response) {
  console.log("We have a response, handle it")
  console.log("Response: ", response)
})

console.log("Debug 2")
