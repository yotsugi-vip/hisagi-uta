import React, { Component } from "react";
import "./App.css";
import Header_img from "./picture/utsHisagi.jpg";
import { match_result, uta_movie_url, hisagi_movie_url } from "./data";

function hisagiWinCalc(order) {
  var a = 0;
  switch (order) {
    case 1:
      match_result.order1.forEach(match => (match.team1.win ? a++ : 0));
      break;
    case 2:
      match_result.order2.forEach(match => (match.team1.win ? a++ : 0));
      break;
    default:
      break;
  }
  return a;
}

function Header() {
  return (
    <header className="App-header">
      <img src={Header_img} alt="header banner" />
    </header>
  );
}

function Body() {
  return (
    <div>
      <details>
        <summary>
          第一周
          <p>HISAGI WIN {hisagiWinCalc(1)}</p>
          <p>UTA WIN {5-hisagiWinCalc(1)}</p>
        </summary>
        {match_result.order1.map((match, i) => (
          <div key={i}>
            <div className="ul-team">
              <ul className="li-all">
                {match.team1.member.player.map((player, i) => (
                  <li key={i}>{player}</li>
                ))}
              </ul>
              <ul className="li-all">
                {match.team2.member.player.map((player, i) => (
                  <li key={i}>{player}</li>
                ))}
              </ul>
            </div>
            {hisagi_movie_url}
            {uta_movie_url}
            {hisagiWinCalc(1)}
          </div>
        ))}
      </details>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
