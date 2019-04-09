import React from 'react';

import Title from './title';

import GuessSection from './guess-section';
import NavBar from './nav-bar';

 
export default class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      guesses: [],
      answer: 15,
      message: 'Make your guess'
    }
  }

  guess(guess) {
    let difference = Math.abs(guess - this.state.answer)
    let message;
    if (difference === 0) {
      message = 'You Won! Click reset game to play again'
    } else if (difference <= 10) {
      message = 'Hot'
    } else {
      message = 'Cold'
    }

    this.setState({
      message,
      guesses: [...this.state.guesses, guess]
    })
    console.log(this.state.guesses);
  }

  resetGame(e) {
    e.preventDefault();
    this.setState({
      message: 'Make your guess',
      guesses: [],
      answer: Math.floor(Math.random() * 100) + 1
    })
  }

  render() {
    return (
      <div>
        <NavBar onResetGame={(e) => this.resetGame(e)}/>
        <Title />
        <GuessSection onGuess={guess => this.guess(guess)} guesses={this.state.guesses} message={this.state.message}/>
      </div>
      );
  }
}