import React, { Component } from 'react';
import AuthContext from '../auth/AuthContext';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { apiHandler } from '../../handler/handler';
const handler = apiHandler();
export default class Signup extends Component {
  state = {
    first_name: 'Marcel',
    last_name: 'dupont',
    email: 'marcel.dupont@gmail.com',
    password: '123456',
    // avatar: null,
    // selectedFile: null,
  };
  // la classe Signup est désormais 'abonnée' au AuthProvider, il consome les infos du provider
  static contextType = AuthContext;

  fileInput = React.createRef();
  // on créé une référence ici, utilisée sur le l'input file plus bas
  // https://fr.reactjs.org/docs/uncontrolled-components.html#the-file-input-tag
  fileChangedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
    let reader = new FileReader();
    // lis le fichier qui a été rentré avec le slected file
    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result,
      });
    };
    //La méthode readAsDataURL permet de lire le contenu de l’objet
    reader.readAsDataURL(event.target.files[0]);
  };
  submit = () => {
    var fd = new FormData();

    fd.append('file', this.state.selectedFile);

    var request = new XMLHttpRequest();
    // callback qui est appelé dans le context et change le state pour le slected file
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        alert('Uploaded!');
      }
    };
    //nstancie une nouvelle requête ou réinitialise un déjà existante.
    request.open('POST', '', true);
    // envoie cette nouvelle requete qans la bdd  grace au formdata
    request.send(fd);
  };

  handleInput = (evt) => this.setState({ [evt.target.name]: evt.target.value });
  handleSubmit = async (evt) => {
    console.log('hello fofona');
    evt.preventDefault();

    const { first_name, last_name, email, password } = this.state;
    // console.log(this.state);
    const avatar = this.fileInput.current.files[0]; // on récupère la valeur de l'input file référencé
    const fd = new FormData(); // formData est obligatoire pour envoyer des files (ex: avatar) vers le backend
    // check la doc : https://developer.mozilla.org/fr/docs/Web/API/FormData

    fd.append('first_name', first_name); // on ajoute des clé valeurs dans l'objet fd
    fd.append('last_name', last_name);
    fd.append('email', email);
    fd.append('password', password);
    fd.append('avatar', avatar);

    if (avatar) fd.append('avatar', avatar);

    this.context.signup(this.state, () => {
      this.props.history.push('/signin');
    });
  };

  render() {
    return (
      <div>
        <form
          className="form"
          onSubmit={this.handleSubmit}
          onChange={this.handleInput}
        >
          <h1 className="title">Signup</h1>
          <label htmlFor="first_name" className="label">
            first name
          </label>
          <input
            id="first_name"
            name="first_name"
            type="text"
            className="input"
            defaultValue={this.state.first_name}
            autoComplete="given-name"
          />
          <label htmlFor="last_name" className="label">
            last name
          </label>
          <input
            id="last_name"
            name="last_name"
            type="text"
            className="input"
            defaultValue={this.state.last_name}
            autoComplete="family-name"
          />
          <label htmlFor="email" className="label">
            email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input"
            defaultValue={this.state.email}
            autoComplete="email"
          />
          <label htmlFor="password" className="label">
            password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="input"
            defaultValue={this.state.password}
            autoComplete="current-password"
          />
          <label htmlFor="avatar" className="label">
            <FontAwesomeIcon icon={faUser} />
          </label>
          <input
            id="avatar"
            name="avatar"
            type="file"
            className="is-hidden"
            ref={this.fileInput} // la référence créé dans la classe est associée à cet input file
          />

          <button className="btn">ok</button>

          <hr />
          <p>
            Already have an account ? please{' '}
            <Link className="link" to="/signin">
              sign in
            </Link>
          </p>
        </form>
      </div>
    );
  }
}
