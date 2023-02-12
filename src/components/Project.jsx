import React from "react";
import '../App.css';

const code = require('../img/code.png')

const Project = () => {
    return (
        <div className="Project" id="Project">
            <div class="card" style={{marginRight: "250px"}}>
                <img src={code} alt="img de moi"/>
                <div class="card-content">
                    <h3 class="card-title">CryptoExtension</h3>
                    <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolorum ad est numquam veniam porro incidunt, aspernatur asperiores mollitia officia necessitatibus omnis pariatur rerum? Consectetur iste rem placeat corrupti earum.</p>
                    <a href="https://cryptoextension.fr" target="_blank" class="card-link" rel="noreferrer">Voir le projet</a>

                </div>
            </div>

            <div class="card">
                <img src={code} alt="img de moi"/>
                <div class="card-content">
                    <h3 class="card-title">CryptoExtension-API</h3>
                    <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolorum ad est numquam veniam porro incidunt, aspernatur asperiores mollitia officia necessitatibus omnis pariatur rerum? Consectetur iste rem placeat corrupti earum.</p>
                    <a href="https://github.com/NapoTwiixe306/CryptoExtension-Api" target="_blank" class="card-link" rel="noreferrer">Voir le projet</a>
                </div>
            </div>
        </div>
    );
};

export default Project;