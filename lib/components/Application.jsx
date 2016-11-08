import React, {Component} from 'react';

const ReactDOM = require('react-dom');

class Application extends Component {
  constructor(){
    super();
    this.state = {
      word: '',
      score: null,
      warning: false,
    }
  }

  addWord(e){
    const word = e.target.value;
    this.setState({ word: word });
  }

  scoreWord(letterScores) {
    const scores = [];
    const rawWord = this.state.word;
    const userWord = this.state.word.toUpperCase().split('');
    const wordIsValid = rawWord.length > 0 && isNaN(parseInt(rawWord, 10));
    if (wordIsValid) {
      userWord.forEach((letter) => {
        scores.push(parseInt(letterScores[letter], 10));
      });
      const score = scores.reduce((a, b) => {
        return a + b;
      }, 0);
      this.setState({ score: score });
      this.setState({ warning: false });
    }
    else {
      this.setState({ score: 0 });
      this.setState({ warning: true });
    }
  }

  render() {

    const letterScores = {
  A: 1, B: 3, C: 3, D: 2,
  E: 1, F: 4, G: 2, H: 4,
  I: 1, J: 8, K: 5, L: 1,
  M: 3, N: 1, O: 1, P: 3,
  Q: 10, R: 1, S: 1, T: 1,
  U: 1, V: 4, W: 4, X: 8,
  Y: 4, Z: 10
}

    const { score, warning } = this.state;

    return (

      <div>
        <h1>Scrabble Scorer!</h1>
        {warning ? <p className="warning">Error! Please enter a valid word!</p> : ''}
        <input type="text" onChange={(e)=>{this.addWord(e)}}/>
        <button onClick={()=>{this.scoreWord(letterScores)}}>Score Word</button>
        <p>The score for your word is: {score}</p>
      </div>
    );
  }

}


export default Application;
