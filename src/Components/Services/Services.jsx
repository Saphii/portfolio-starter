import React, { useContext } from "react";
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from "../Card/Card";
import CvFg from './CvFg.pdf';
import {themeContext} from "../../Context";
import {motion} from "framer-motion";

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration : 2, type:'spring'}
    return (
        <div className="services">

            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? "white" : "" }}>Mes</span>
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
            <motion.div
                whileInView={{left: '25rem'}}
                initial={{left: '25%'}}
                transition={transition}
                style={{left: '14rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading={'Design'}
                detail = {"Photoshop, Illustrator, Adobe Premiere Pro "}
                />
            </motion.div>
                {/* second card */}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-4rem" }}
                    transition={transition}
                    >
                    <Card
                        emoji={Glasses}
                        heading={"Developpeur"}
                        detail={"html, Css, JavaScript, React, Angular"}/>
                </motion.div>


                {/* third card*/}
                <motion.div
                    initial={{ top: "19rem", left: "25rem" }}
                    whileInView={{ left: "12rem" }}
                    transition={transition}
                    >
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={"Grande Attention porté à l'expérience et l'interface utilisateur "}/>
                </motion.div>


            </div>
        </div>
    );
};

export default Services;