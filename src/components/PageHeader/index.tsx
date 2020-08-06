import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/image/logo.svg';
import backIcon from '../../assets/image/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
    title: string;
    descripition?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
        <div className="top-bar-container">
           <Link to="/">
               <img src={backIcon} alt="Voltar"/>
               </Link> 
               <img src={logoImg} alt="Proffy"/>
        </div>

        <div className="header-content">
            <strong>{props.title}</strong>

            { props.descripition && <p>{props.descripition}</p>}

            {props.children}
        </div>
    

    </header>
    );
}

export default PageHeader;