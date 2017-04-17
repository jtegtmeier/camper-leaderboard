import React from 'react'
import '../Style/Leaderboard.css'

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

  checkActiveSelect(selecter){
    return this.state.selectUsersBy === selecter ? "selected" : ""
  }

  render() {
    let campers

    switch(this.state.selectUsersBy){
      case 'alltime': campers = this.state.alltime
      break
      case 'recent': campers = this.state.recent
      break
      default: campers = []
    }

    return (
      <div className="Leaderboard">
        <h2>Leaderboard</h2>
        <div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Camper</th>
              <th className={"clickable " + this.checkActiveSelect("recent")} onClick={this.selectRecent}>Recent</th>
              <th className={"clickable " + this.checkActiveSelect("alltime")} onClick={this.selectAllTime}>All Time</th>
            </tr>
          </thead>
          <tbody>
            {campers.map((obj, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td className="camper"><img src={obj.img} alt={obj.username}></img>{obj.username}</td>
                  <td>{obj.recent}</td>
                  <td>{obj.alltime}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
      </div>
    )
  }
}
