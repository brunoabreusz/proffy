import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/image/logo.svg';
import landingImg from '../../assets/image/landing.svg';

import studyIcon from '../../assets/image/icons/study.svg';
import giveClassesIcon from '../../assets/image/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/image/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';


function Landing(){
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data.total;

            setTotalConnections(total);
        })
    }, []);

    
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos"
                className="hero-image" />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                         <img src={studyIcon} alt="Estudar"/>
                         Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                         <img src={giveClassesIcon} alt="Dar Aulas"/>
                         Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>

            </div>
        </div>
    )

}

export default Landing;