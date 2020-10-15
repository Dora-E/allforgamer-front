import React, { Component } from "react";
import { apiHandler } from "../../handler/handler";
import AuthContext from "../auth/AuthContext";

const handler = apiHandler();
export default class Commentaire extends Component {
  state = {
    message: null,
    game: this.props.game,
  };
  static contextType = AuthContext;
  // qd un comentaire est posté il prend en compte l'id de luser qui poste le commentaire from: this.context.currentUser._id
  //mais aussi l'id du jeux sur lequel est poster le commentaire avec le to: this.state.game._id
  //plus le commentaire poster message: this.state.message
  handleSubmit = async (evt) => {
    evt.preventDefault();
    //state de commentaire est null au depart

    console.log(this.context.currentUser);
    //recupere data du model commentaire le to le from et le message poster
    const commentaire = {
      to: this.state.game._id,
      from: this.context.currentUser._id,
      message: this.state.message,
    };
    await handler.post("/commentaires/", commentaire);
    this.props.getCommentaires();
    //getComentaire est une fonction callbakc definie dans le composant games qui recupere les comentaire poster sur l'id du jeu en question
  };

  handleChange = (event) => {
    //prend le message ecris sur le champ textarea et l'envoi avec le handle submit en bdd
    this.setState({ message: event.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <label>
            Commentaires:
            <textarea value={this.state.value} name="message" />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    );
  }
}
