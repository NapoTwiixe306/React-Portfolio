import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const julien = require('../img/julien.png')

const Header = () => {
    return (
        <div className="all">
            <div className="title-box">
                <span className="wave">👋</span>
                <p className="P-text">Hello, i'm</p>
                <p className="head-text">Julien</p>
            </div>
            <div className="work-box">
                <p className="work">Full-stack Developper</p>
                <p className="work">Junior</p>
            </div>
            <div className="img-box">
                <img src={julien} alt="img de moi" className="imgJ"/>
            </div>
        </div>
    );
};

export default Header;