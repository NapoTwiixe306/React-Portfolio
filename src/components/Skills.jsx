import React from "react";
import '../App.css';

const Skills = () => {
    return (
       <div id="Skill">
            <div className="skill">
                <h1 className="skill-title">My Skills</h1>
                <p className="skill-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae enim ipsam quaerat deleniti debitis officia possimus ratione? At excepturi pariatur in vitae tenetur ut magni temporibus maxime non ullam.</p>
            </div>

            <div className="skill-box">
                <h1>Html</h1>
                <div className="box">
                    <div className="skills-html">90%</div>
                </div>
                <h1>Css</h1>
                <div className="box">
                    <div className="skills-css">75%</div>
                </div>
                <h1>Js</h1>
                <div className="box">
                    <div className="skills-js">60%</div>
                </div>
                <h1>React</h1>
                <div className="box">
                    <div className="skills-react">25%</div>
                </div>
            </div>
       </div>
    );
};

export default Skills;