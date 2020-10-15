import React, { Component } from "react";
import { apiHandler } from "../../handler/handler";
import AuthContext from "../auth/AuthContext";
const handler = apiHandler();
export default class CreateGames extends Component {
  state = {
    games: [],
  };
  static contextType = AuthContext;

  fileInput = React.createRef();
  //prend la valeur entrée dans les  champs du formulaire
  change = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  // ajoutes données rentrés dans les champs dans la base de donnes et les affiche sur le site
  submit = async (evt) => {
    evt.preventDefault();
    await handler.post("/games/", this.state);
  };

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { name, creator, date, description, video } = this.state;
  //   const images = this.fileInput.current.files[0];
  //   const fd = new FormData();
  //   fd.append("name", name);
  //   fd.append("creator", creator);
  //   fd.append("date", date);
  //   fd.append("description", description);
  //   fd.append("video", video);

  //   if (images) fd.append("images", images);
  //   this.context.(fd, () => {
  //     this.props.history.push("/games");
  //   });
  // };

  render() {
    return (
      <form className="form" onChange={this.change} onSubmit={this.submit}>
        <h1 className="title">Nouveau Jeu</h1>

        <label htmlFor="name" className="label">
          name
        </label>
        <input id="name" name="name" type="text" className="input" />

        <label htmlFor="creator" className="label">
          creator
        </label>
        <input id="creator" name="creator" type="text" className="input" />

        <label htmlFor="date" className="label">
          Date
        </label>
        <input id="date" name="date" type="date" className="input" />

        <label htmlFor="url" className="label">
          Video
        </label>
        <input
          type="url"
          name="url"
          id="url"
          placeholder="https://example.com"
          size="30"
        ></input>

        <label htmlFor="images" className="label">
          Images
        </label>
        <input
          id="images"
          name="images"
          type="file"
          className="is-hidden"
          ref={this.fileInput}
        />

        <button className="btn" type="submit">
          create !!!
        </button>
      </form>
    );
  }
}
