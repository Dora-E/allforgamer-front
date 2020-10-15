import React, { Component } from "react";
import Commentaire from "./Commentaire";
import moment from "moment";
import Favoris from "./Favoris";
import ReactPlayer from "react-player";
import { apiHandler } from "../../handler/handler";
import AfficherCommentaire from "./AfficherCommentaire";

const handler = apiHandler();

export default class Games extends Component {
  state = {
    game: null,
    commentaires: [],
  };
  // static contextType = AuthContext;

  async componentDidMount() {
    //intéragir avec des data du server-back,
    // const route = useLocation();
    console.log(this.props.match.params.id);
    try {
      // recup les jeu dans le handler qui a comme url celle du back end http://localhost:8000
      const game = await handler.get("/games/" + this.props.match.params.id);
      // const commentaires = await handler.get("/commentaires/");
      this.getCommentaires();
      // console.log(game);
      this.setState({ game: game.data }); // le changement reprend toute les data donner dans la bdd
    } catch (err) {
      console.error(err);
    }
  }
  // function qui recupere les commentaire poste et les filtre en fonction de l'id du jeu
  getCommentaires = async () => {
    const commentaires = await handler.get("/commentaires");
    console.log("COMMENTAIRES GAMES : ", commentaires);
    //filtre les data qu model commentaire pour les afficher  from to et message
    const filteredComm = commentaires.data.filter((commentaire) => {
      //si le id du to du commentaire est = a l'id du jeu en question affcihe le commentaire
      if (commentaire.to._id == this.state.game._id) {
        return commentaire;
      }
    });
    this.setState({ commentaires: filteredComm });
    // return filteredComm;
  };

  render() {
    //recup jeu et affiche data
    const { game: g } = this.state;

    return (
      g && (
        <div className="container-games">
          <h2 className="title1"> {g.name} </h2>

          <p className="desc">{g.description}</p>
          <ul className="games-infos">
            <li> Editeur {g.creator}</li>
            {/* le format de la date viens de moment .js jour mois année  */}
            <li> Date de sortie :{moment(g.date).format("DD MMM YYYY")}</li>
            <li> Categorie :{g.categories}</li>
            <div className="video">
              <ReactPlayer
                url={g.video}
                // config de video venant de youtube
                config={{ youtube: { playerVars: { showinfo: 1 } } }}
                controls
                width="1000px"
                height="540px"
              />
            </div>
            <li>
              <Favoris />
            </li>
            {/*  map le tableau d'images afin d'afficher toutes les images rentrées en base de données */}
            <div className="grid-container">
              {g.images.map((image, i) => (
                <img className="imgGames" key={i} src={image} alt="" />
              ))}
            </div>
          </ul>
          <div>
            {/* /recupere le compossant por afficher le commantaire avec les props du state commentaire definie au debut de se composant un tableau vide et donne les data dans se tableau */}
            <AfficherCommentaire commentaires={this.state.commentaires} />
            {/* recupere le composant commentaire qui poste le message avec les props du jeu et la fontion callback get commentaire qui filtre en fopnctionde l'id du jeu */}
            <Commentaire
              game={this.state.game}
              getCommentaires={this.getCommentaires}
            />
          </div>
        </div>
      )
    );
  }
}
