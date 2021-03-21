const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'sissors' ||
    userInput === 'bomb'
  ) {
    return userInput
  } else {
    console.log('Error! Please choose paper, rock, or sissors.')
  }
}
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'sissors'
  }
}
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a tie!'
  }
  if (userChoice === 'rock') {
    if (compuerChoice === 'paper') return 'Sorry, computer won!'
  } else {
    return 'You won'
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'sissors') return 'Sorry, the computer won!'
  } else {
    return 'Congratulations, you won!'
  }
  if (userChoice === 'sissors') {
    if (computerChioce === 'rock') return 'Sorry, the computer won!'
  } else {
    return 'Congratulations, you won!'
  }
  if (userChoice === 'bomb') {
    return 'Congratulations, you won!'
  }
}

const playGame = () => {
  const userChoice = getUserChoice('sissors')
  const computerChoice = getComputerChoice()
  console.log('You threw: ' + userChoice)
  console.log('The computer threw: ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}

playGame()
