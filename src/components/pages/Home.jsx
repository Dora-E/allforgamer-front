import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container">
      <h3 className="home">
        All For Gamers. Fait par les joueurs et pour les joueurs. Site
        d’informations sur les jeux a venirs. Les dates prevues, les premieres
        images, bandes annonces. Enjoy Games!
      </h3>
      <NavLink
        exact
        to="/2021"
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <br />
        <h2>2021</h2>
      </NavLink>
      <AwesomeSlider>
        <div data-src="https://res.cloudinary.com/dnhyvjk7j/image/upload/v1631111387/games/LosGhSqN4vM7T4n6ux4dvY_srv5l4.jpg" />
        <div data-src="https://res.cloudinary.com/dnhyvjk7j/image/upload/v1631100949/games/EGS_KenaBridgeofSpirits_EmberLab_S5-1920x1080-450356496c568d85ecc7319a202b99b7_hjbx0c.jpg" />
        <div data-src="https://res.cloudinary.com/dnhyvjk7j/image/upload/v1631101171/games/H2x1_NSwitchDS_HollowKnightSilksong_pqajv8.jpg" />
      </AwesomeSlider>

      <NavLink
        exact
        to="/2022"
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <br />
        <br />
        <h2>2022</h2>
      </NavLink>
      <AwesomeSlider>
        <div data-src="https://res.cloudinary.com/dnhyvjk7j/image/upload/v1631100262/games/elden-ring-toutes-les-infos-date-de-sortie-trailer-gameplay_zp2ahv.jpg" />
        <div data-src="https://res.cloudinary.com/dnhyvjk7j/image/upload/v1631102486/games/1560429221-4552-jaquette-avant_pjyxlt.jpg" />
        <div data-src="https://res.cloudinary.com/dnhyvjk7j/image/upload/v1631109950/games/1530630713-8513-jaquette-avant_r5ipur.jpg" />
      </AwesomeSlider>

      {/* <NavLink
        exact
        to="/Login"
        style={{ textDecoration: "none", color: "black" }}
      >
        <h2>Login</h2>
      </NavLink>
      <AwesomeSlider>
        <div data-src={image} />
        <div data-src={image1} />
        <div data-src={image2} />
      </AwesomeSlider> */}
      {/* <div class="img">
        <img src={image} alt="" />
      </div>
      <div class="img">
       
        <img src={image1} alt="" />
      </div>
      <div class="img">
        
        <img src={image2} alt="" />
      </div> */}
    </div>
  );
}
// https://reactjsexample.com/react-component-that-renders-a-media-gallery-slider-carousel/ use pour le carousel
