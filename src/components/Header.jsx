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
                <p className="work-g">Junior</p>
            </div>
            <div className="loc-box">
                <span className="loce">📍</span>
                <p className="loc">Belgium, Liège</p>
            </div>
            <div className="img-box">
                <img src={julien} alt="img de moi" className="imgJ"/>
                <FontAwesomeIcon icon={faGithub} className="git"/>
                <FontAwesomeIcon icon={faGoogle} className="google"/>
                <FontAwesomeIcon icon={faInstagram} className="insta"/>
            </div>
            <div className="me">
                <div className="me-text">
                    <p className="me-para">I am a young full-stack developer, self-taught, I started to code when I was 15, (5 years ago), so I am 20 years old, I specialize in web dev, and more precisely in web.3, crypto, and blockchain</p>
                </div>
            </div>
        </div>
    );
};

export default Header;