import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
            <div className="i-name">
                <span>Hello Je m'appelle</span>
                <span> Florian Georges</span>
                <span>Je suis actuellement dans ma deuxième année à l'université ! Je prépare ma licence
                en dévelopement informatique ! Développeur Frontend , je suis passionée par tout ce qui touche aux nouvelles technologies ! </span>
            </div>

                <button className="button i-button">Recrutez Moi !</button>
                <div className="i-icons">

                    <a href='https://github.com/Saphii' target="_blank">
                    <img src={Github} alt=""/>
                    </a>
                    <a href='https://www.linkedin.com/in/florian-georges-314129146/' target="_blank">
                    <img src={LinkedIn} alt=""/>
                    </a>
                    <a href='https://www.instagram.com/flosaphii/?hl=fr' target="_blank">
                    <img src={Instagram} alt=""/>
                    </a>

                </div>

            </div>
            <div className="i-right">
                <img src={Vector1} alt=""/>
                <img src={Vector2} alt=""/>
                <img src={boy} alt=""/>
                <div style={{top:'-4%', left: '68%'}}>
                    <FloatingDiv image={Crown} text1='Web / Appli Mobile' text2='Developpeur'/>
                </div>
                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image={thumbup} text1='Fan de Design' text2=''/>
                    <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                    <div
                        className="blur"
                        style={{
                            background: "#C1F5FF",
                            top: "10rem",
                            width: "21rem",
                            height: "11rem",
                            left: "-9rem",
                        }}
                    ></div>
                </div>
                </div>



        </div>
    );
};

export default Intro;