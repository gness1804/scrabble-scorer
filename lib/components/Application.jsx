import React, {Component} from 'react';
import scoreWord from '../vanilla.js';

const ReactDOM = require('react-dom');

class Application extends Component {

  render() {

    console.log(scoreWord('hello', 2)); //this works

    return (
      <div>Hello! This is a test. If I can see this, then React is set up correctly.</div>
    );
  }

}


export default Application;
