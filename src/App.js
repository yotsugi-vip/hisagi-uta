import React, { Component } from "react";
import "./App.css";
import Header_img from "./picture/header.png";
import { match_result, uta_movie_url, hisagi_movie_url } from "./data";
import hoko_img from "./picture/hoko.png";
import asari_img from "./picture/asari.png";
import area_img from "./picture/area.png";
import tower_img from "./picture/tower.png";
import nawabari_img from "./picture/nawabari.png";

function hisagiWinCalc(order) {
  let sum = 0;
  match_result[order].forEach(result => {
    if (result.team2.win) sum++;
  });
  return sum;
}

function utaWinCalc(order) {
  let sum = 0;
  match_result[order].forEach(result => {
    if (result.team1.win) sum++;
  });
  return sum;
}

function Header() {
  return (
    <header className="App-header">
      <img
        style={{
          width: "100%"
        }}
        src={Header_img}
        alt="header banner"
      />
    </header>
  );
}

function Body() {
  return (
    <div style={{ width: "100%"}}>
      {match_result.map((match, i) => (
        <div key={i} style={{margin:"0px 0px 10px 0px"}}>
          <details className="container">
            <summary>
              第{i + 1}周
              <div className="match-order">
                <p>炉龍うた {utaWinCalc(i)} 勝</p>
                <p>楸 {hisagiWinCalc(i)} 勝</p>
              </div>
            </summary>
            {match.map((match, i) => (
              <div
                className="match-result"
                key={i}
                style={{
                  backgroundImage: `url(${
                    match.rule === "ナワバリバトル"
                      ? nawabari_img
                      : match.rule === "ガチエリア"
                      ? area_img
                      : match.rule === "ガチホコバトル"
                      ? hoko_img
                      : match.rule === "ガチヤグラ"
                      ? tower_img
                      : match.rule === "ガチアサリ"
                      ? asari_img
                      : nawabari_img
                  })`
                }}
              >
                <div className="result-display">
                  <p
                    className="result-winlose"
                    style={
                      match.team1.win ? { color: "orange" } : { color: "blue" }
                    }
                  >
                    {match.team1.win ? "WIN" : "LOSE"}
                  </p>

                  <p
                    className="result-winlose"
                    style={
                      match.team2.win ? { color: "orange" } : { color: "blue" }
                    }
                  >
                    {match.team2.win ? "WIN" : "LOSE"}
                  </p>
                </div>
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
                <div className="movie-link">
                  <a href={hisagi_movie_url + "?t=" + match.hisagi_movie}>
                    楸 試合リンク
                  </a>
                  <a href={uta_movie_url + "?t=" + match.uta_movie}>
                    炉龍うた 試合リンク
                  </a>
                </div>
              </div>
            ))}
          </details>
        </div>
      ))}
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
