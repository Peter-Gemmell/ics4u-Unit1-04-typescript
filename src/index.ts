/**
 * The program makes rock paper scissors
 *
 *
 * By: Peter Gemmell
 * Version: 1.0
 * Since:   2022-09-17
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()
const min = 1
const max = 6
const mystery = Math.floor(Math.random() * max) + min
let guesses = 1

while (true) {
  try {
    const guessString = prompt('Guess a number between 1-6: ')
    const guess = parseInt(guessString)

    if (isNaN(guess)) {
      throw new Error('not a number')
    }
    if (guess < 1 || guess > 6) {
      console.log('Not an integer between 1-6.')
    } else if (guess === mystery) {
      console.log('\nYou guessed correctly!')
      console.log(`It took ${guesses} tries.`)
      break
    } else if (guess > mystery) {
      console.log('That number is too high, guess lower.')
    } else {
      console.log('That number is too low, guess higher.')
    }
  } catch (e) {
    console.log('Not an integer between 1-6.')
  }
  guesses = guesses + 1
}
console.log('\nDone.')
