import React, { Component } from "react";

import moment from "moment";
import { Link } from "react-router-dom";

import { apiHandler } from "../../handler/handler";
const handler = apiHandler();
// import { useLocation } from "react-router-dom";
export default class Annee extends Component {
  state = {
    games: [],
    filteredGames: [],
    // month: [
    //   "janvier",
    //   "fevrier",
    //   "mars",
    //   "avril",
    //   "mai",
    //   "juin",
    //   "juillet",
    //   "septembre",
    //   "octobre",
    //   "novembre",
    //   "decembre",
    // ],
    year: [2020, 2021],
  };
  async componentDidMount() {
    const games = await handler.get("/games");
    this.setState({ games: games.data }, this.getGameByYearAndMonth);
  }

  getGameByYearAndMonth() {
    const games = this.state.games;
    // let locateGame = useLocation(); {locateGame.pathname}
    var tab = []; // creation d'un nouveau tableau
    if (games.length !== 0) {
      //envoie données filtrer par année dans se nouveau tableau
      tab = games.filter((game, i) => {
        let year = moment(game.date).format("YYYY"); //recupere lannee de la date du jeu
        //   let month = moment(game.date).format("MM");recup le mois de la date du jeu
        if (year === "2020") return game; // && month === "01"return en fonction de la date
      });
      // nouvelle données de filteredgames est le tableau créés au dessus càd les jeux filtrer par année ici 2020
      this.setState({ filteredGames: tab });
    }
  }
  render() {
    return (
      <div>
        {this.state.filteredGames.map((g, i, arr) => {
          return (
            <div className="games" key={i}>
              <Link
                className="lienGame"
                to={`/games/${g._id}`}
                // style={{ textDecoration: "none", color: "RGB(255, 230, 185)" }}
              >
                {g.name}
                {}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
