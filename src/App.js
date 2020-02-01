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
    <div style={{ width: "100%", backgroundColor: "azure" }}>
      <details
        style={{
          border: "1px solid",
          borderRadius: "4px",
          margin:"10px 0"
        }}
        open
      >
        <summary>
          第一周
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontWeight: "900",
              fontsize: "30px"
            }}
          >
            <p>炉龍うた {5 - hisagiWinCalc(1)} 勝</p>
            <p>楸 {hisagiWinCalc(1)} 勝</p>
          </div>
        </summary>

        {match_result.order1.map((match, i) => (
          <div
            className={"match" + i}
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
              })`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "rgba(255,255,255,0.8)",
              backgroundBlendMode: "lighten",
              padding: "40px 0px",
              margin: "15px 0px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <p
                style={
                  match.team1.win
                    ? {
                        color: "orange",
                        fontWeight: "900",
                        fontSize: "20px",
                        margin: "0px"
                      }
                    : {
                        color: "blue",
                        fontWeight: "900",
                        fontSize: "20px",
                        margin: "0px"
                      }
                }
              >
                {match.team1.win ? "WIN" : "LOSE"}
              </p>
              <p
                style={
                  match.team2.win
                    ? {
                        color: "orange",
                        fontWeight: "900",
                        fontSize: "20px",
                        margin: "0px"
                      }
                    : {
                        color: "blue",
                        fontWeight: "900",
                        fontSize: "20px",
                        margin: "0px"
                      }
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly"
              }}
            >
              <a href={hisagi_movie_url + match.hisagi_movie}>楸 試合リンク</a>
              <a href={uta_movie_url + match.uta_movie}>炉龍うた 試合リンク</a>
            </div>
          </div>
        ))}
      </details>

      <details
        style={{
          border: "1px solid",
          borderRadius: "4px",
          margin:"10px 0"
        }}
        open
      >
        <summary>
          第二周
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              fontWeight: "900",
              fontsize: "30px"
            }}
          >
            <p>炉龍うた {5 - hisagiWinCalc(2)} 勝</p>
            <p>楸 {hisagiWinCalc(2)} 勝</p>
          </div>
        </summary>

        {match_result.order2.map((match, i) => (
          <div
            className={"match" + i}
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
              })`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundColor: "rgba(255,255,255,0.8)",
              backgroundBlendMode: "lighten",
              padding: "40px 0px",
              margin: "15px 0px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <p
                style={
                  match.team1.win
                    ? {
                        color: "orange",
                        fontWeight: "900",
                        fontSize: "20px",
                        margin: "0px"
                      }
                    : {
                        color: "blue",
                        fontWeight: "900",
                        fontSize: "20px",
                        margin: "0px"
                      }
                }
              >
                {match.team1.win ? "WIN" : "LOSE"}
              </p>
              <p
                style={
                  match.team2.win
                    ? {
                        color: "orange",
                        fontWeight: "900",
                        fontSize: "20px",
                        margin: "0px"
                      }
                    : {
                        color: "blue",
                        fontWeight: "900",
                        fontSize: "20px",
                        margin: "0px"
                      }
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly"
              }}
            >
              <a href={hisagi_movie_url + match.hisagi_movie}>楸 試合リンク</a>
              <a href={uta_movie_url + match.uta_movie}>炉龍うた 試合リンク</a>
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
