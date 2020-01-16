import React, { Component } from 'react';
import './App.css';
import Header_img from './picture/utsHisagi.jpg';
import { match_result, team_hisagi, uta_movie_url, hisagi_movie_url } from './data';

function Header(){
  return(
    <header className="App-header">
      <img src={Header_img} alt="header banner" />
    </header>
  );
}

function Body(){
  return(
    <body>
      {match_result.order1.map((team, i)=>(
        <div key={i}>
          <p>{team.rule}</p>
          <p>{team.team1.member.player}</p>
          <p>{team.team2.member.player}</p>
          <p><a href={uta_movie_url+"?t="+team.uta_movie}>試合リンク 炉龍うた</a></p>
          <p><a href={hisagi_movie_url+"?t="+team.hisagi_movie}>試合リンク 楸</a></p>
        </div>
      ))}
       {match_result.order2.map((team, i)=>(
        <div key={i}>
          <p>{team.rule}</p>
          <p>{team.team1.member.player}</p>
          <p>{team.team2.member.player}</p>
          <p><a href={uta_movie_url+"?t="+team.uta_movie}>試合リンク 炉龍うた</a></p>
          <p><a href={hisagi_movie_url+"?t="+team.hisagi_movie}>試合リンク 楸</a></p>
        </div>
      ))}
    </body>
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
