import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="experience" id='experience'>
            <div className="achievement">
                {/* darkMode */}
                <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2+</div>
                <span  style={{color: darkMode?'white':''}}>Années </span>
                <span>D'éxperiences</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3+</div>
                <span  style={{color: darkMode?'white':''}}>Projets </span>
                <span>Complétés</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3+</div>
                <span  style={{color: darkMode?'white':''}}>Entreprises </span>
                <span>Fréquentés</span>
            </div>
        </div>
    );
};

export default Experience;