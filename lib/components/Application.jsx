import React, {Component} from 'react';
import scoreWord from '../vanilla.js';

const ReactDOM = require('react-dom');

class Application extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
    };
  }

  updateWordState(e) {
    this.setState({ word: e.target.value });
  }

  clearInput() {
    this.setState({ word: '' });
  }

  render() {

    const score = scoreWord(this.state.word);

    return (
      <div>
        <input value={this.state.word} onChange={(e) => { this.updateWordState(e); }} />
        <span>Your word score is {score}</span>
        <button onClick={() => { this.clearInput(); }}>Clear</button>

      </div>
    );
  }

}


export default Application;
