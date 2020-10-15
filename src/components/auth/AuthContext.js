import React from "react";

// read the doc : https://fr.reactjs.org/docs/context.html
//Le Contexte offre un moyen de partager des valeurs comme celles-ci entre des composants sans avoir à explicitement passer une prop à chaque niveau de l’arborescence.
const AuthContext = React.createContext();

// voir AUSSI ./AuthProvider, défini dans ce même dossier

export default AuthContext;