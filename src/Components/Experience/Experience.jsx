import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <div className="experience">
        <div className="achievement">
            <div className="circle">2+</div>
            <span>Années </span>
            <span>d'experiences</span>
        </div>
            <div className="achievement">
                <div className="circle">3+</div>
                <span>projets </span>
                <span>complétés</span>
            </div>
            <div className="achievement">
                <div className="circle">3+</div>
                <span>entreprises </span>
                <span>fréquentés</span>
            </div>

        </div>
    );
};

export default Experience;