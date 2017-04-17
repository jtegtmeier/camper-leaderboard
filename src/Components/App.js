import React, { Component } from 'react';
import Leaderboard from './Leaderboard.js'
import '../Style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header></header>
        <Leaderboard></Leaderboard>
        <footer></footer>
      </div>
    );
  }
}

export default App;
