import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from "../Card/Card";
import CvFg from './CvFg.pdf';

const Services = () => {
    return (
        <div className="services">

            {/* left side */}
            <div className="awesome">
                <span>Mes</span>
                <span>Compétences</span>
                <spane>Voici un aperçu de mes compétences
                <br/>
                    elles sont en constantes évolutions !
                </spane>
                <a href={CvFg} download>
                    <button className="button s-button">Télécharger mon CV</button>
                </a>
                <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>

            </div>
            {/* right side*/}
            <div className="cards">
            <div style={{left: '30rem', top: '8rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading={'Design'}
                detail = {"Photoshop, Illustrator, Adobe Premiere Pro "}

                />
            </div>
                {/* second card */}
                <div style={{ top:"12rem", left:"-1rem"}}>
                    <Card
                        emoji={Glasses}
                        heading={"Developpeur"}
                        detail={"html, Css, JavaScript, React, Angular"}/>

                </div>
                {/* third card*/}
                <div style={{top: "19rem", left: "16rem"}}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={"Grande Attention porté à l'expérience et l'interface utilisateur "}/>


                </div>
            </div>
        </div>
    );
};

export default Services;