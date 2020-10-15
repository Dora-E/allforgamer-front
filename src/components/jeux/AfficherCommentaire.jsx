import React, { Component } from "react";
import moment from "moment";

export default class AfficherCommentaire extends Component {
  state = {
    game: this.props.game,
    commentaires: [],
  };
  //componentdidmount est appelée une fois que tous les éléments de la page sont rendus correctement
  //endroit parfait pour appeler la méthode setState() afin de changer l'état de l'application
  async componentDidMount() {
    //intéragir avec des data du server-back,
    // const commentaires = await this.props.getCommentaires();
    this.setState({ commentaires: this.props.commentaires });
  }

  render() {
    return (
      <div className="poste">
        {this.props.commentaires.map((commentaire, i) => (
          <ul key={i}>
            Date : <li>{moment(commentaire.date).format("DD MMM YYYY")}</li>
            Posté par :{" "}
            <li>{commentaire.from && commentaire.from.first_name}</li>
            Commentaire : <li>{commentaire.message}</li>
          </ul>
        ))}
      </div>
    );
  }
}
