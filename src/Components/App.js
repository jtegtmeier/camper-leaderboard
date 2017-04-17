import React, { Component } from 'react';
import Leaderboard from './Leaderboard.js'
import '../Style/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header><span>freeCodeCamp Camper Leaderboard</span></header>
        <Leaderboard></Leaderboard>
        <footer><span className="author">by: Jacob Tegtmeier&nbsp;</span><a href="https://github.com/jtegtmeier/camper-leaderboard">View on Github</a></footer>
      </div>
    );
  }
}
