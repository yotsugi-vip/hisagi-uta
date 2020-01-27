import React, { Component } from "react";
import "./App.css";
import Header_img from "./picture/utsHisagi.jpg";
import { match_result, uta_movie_url, hisagi_movie_url } from "./data";
import hoko_img from "./picture/hoko.png";
import asari_img from "./picture/asari.png";
import area_img from "./picture/area.png";
import tower_img from "./picture/tower.png";
import nawabari_img from "./picture/nawabari.png";

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
      <img
        style={{
          width: "70%"
        }}
        src={Header_img}
        alt="header banner"
      />
    </header>
  );
}

function Body() {
  return (
    <div>
      <details
        style={{
          border: "1px solid",
          borderRadius: "4px"
        }}
      >
        <summary>
          第一周
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <p>楸 {hisagiWinCalc(1)} 勝</p>
            <p>炉龍うた {5 - hisagiWinCalc(1)} 勝</p>
          </div>
        </summary>
        {match_result.order1.map((match, i) => (
          <div key={i}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <p
                style={
                  match.team1.win
                    ? { color: "orange", fontWeight: "900" }
                    : { color: "blue", fontWeight: "900" }
                }
              >
                {match.team1.win ? "WIN" : "LOSE"}
              </p>
              <p
                style={
                  match.team2.win
                    ? { color: "orange", fontWeight: "900" }
                    : { color: "blue", fontWeight: "900" }
                }
              >
                {match.team2.win ? "WIN" : "LOSE"}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around"
              }}
            >
              <a href={hisagi_movie_url + match.hisagi_movie}>楸 試合リンク</a>
              <a href={uta_movie_url + match.uta_movie}>炉龍うた 試合リンク</a>
            </div>
            <div className="ul-team">
              <ul className="li-all">
                {match.team1.member.player.map((player, i) => (
                  <li key={i}>{player}</li>
                ))}
              </ul>
              <ul
                style={{
                  listStyle: "none"
                }}
              >
                <li>
                  <img
                    src={
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
                    }
                    alt="rules"
                  />
                </li>
                <li>{match.rule}</li>
              </ul>
              <ul className="li-all">
                {match.team2.member.player.map((player, i) => (
                  <li key={i}>{player}</li>
                ))}
              </ul>
            </div>
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
