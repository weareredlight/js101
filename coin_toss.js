function tossCoin() {
  return Math.round(Math.random()) ? "heads" : "tails";
}

let gameEnded = false
let userQuit = false
let score = 0

while(!gameEnded && !userQuit) {
  const coin = tossCoin()
  const guess = window.prompt(`Score: ${score}\nHeads or tails?`)
  if (guess !== coin) {
    gameEnded = true
  }
  else if (guess === null) {
    userQuit = true;
  }
  else if (guess === coin) {
    score++;
  }
}

if (gameEnded) {
  alert("Game ended. Your score was " + score)
}
