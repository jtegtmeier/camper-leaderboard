import React from 'react';

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: [],
      alltime: [],
      selectUsersBy: 'alltime'
    }

    this.selectRecent = this.selectRecent.bind(this);
    this.selectAllTime = this.selectAllTime.bind(this);
  }

  componentWillMount(){
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent").then((res) => {
      return res.json()
    }).then((json) => {
      this.setState({'recent': json})
    })
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime").then((res) => {
      return res.json()
    }).then((json) => {
      this.setState({'alltime': json})
    })
  }

  selectAllTime(){
    this.setState({selectUsersBy: 'alltime'})
  }

  selectRecent(){
    this.setState({selectUsersBy: 'recent'})
  }

  render() {
    let campers
    switch(this.selectUsersBy){
      case 'alltime': campers = this.state.alltime
      break
      case 'recent': campers = this.state.recent
      break
      default: campers = this.state.alltime
    }
    return (
      <div style={{display: "flex"}}>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Camper</th>
              <th onClick={this.selectRecent}>Recent Score</th>
              <th onClick={this.selectAllTime}>All Time Score</th>
            </tr>
          </thead>
          <tbody>
            {campers.map((obj, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{obj.username}</td>
                  <td>{obj.recent}</td>
                  <td>{obj.alltime}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
