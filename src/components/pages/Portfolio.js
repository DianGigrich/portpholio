import React from 'react'
import gloom from "../images/Gloomhaven-Helper.png"
import hobby from "../images/Hobby-Tracker.png"
import trivia from "../images/Trivia-Quiz.png"
import Soccer from "../images/Soccer.png"
import code from "../images/Codescape.png"
import '../../index.css';

function Portfolio() {

    return (
        <section className="container mt-3">
            <div className="row">
                <section className="col imagepadding cardborder" id="codescape">
                    <a href="https://codescape.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className="card-img-top border border-secondary rounded" src={code} alt="Codescape Screenshot" />
                    </a>
                    <h3 className="card-title">Codescape</h3>
                    <p>Play escape room mini-games to practice javascript syntax!</p>
                    <a className="nav-link link-info" href="https://github.com/DianGigrich/Codescape">
                        Github Repository Front-End
                    </a>
                    <br />
                    <a className="nav-link link-success" href="https://github.com/DianGigrich/Codescape-backend">
                        Github Repository Back-End
                    </a>
                    <p>REACT team project. Sequelize, SQL database for backend.</p>

                </section>
                <section className="col imagepadding cardborder" id="gloomhaven">
                    <a href="https://gloomhaven-helper-deluxe.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        <img className="card-img-top border border-secondary rounded" src={gloom} alt="Gloomhaven Encounter Screenshot" />
                    </a>
                    <h3 className="card-title">Gloomhaven Helper</h3>
                    <p>Board game assistant to reduce clutter and minutia</p>
                    <a className="nav-link link-info" href="https://github.com/Mattdack/gloomhaven-helper">
                        Github Repository
                    </a>
                    <p>Team project, Handlebars, MVC, Sequelize, SQL</p>
                </section>

                <section className="col imagepadding cardborder" id="pineapple">
                    <a href="https://diangigrich.github.io/PineappleMotivator/" target="_blank" rel="noopener noreferrer">
                        <img class="card-img-top border border-secondary rounded" src={hobby} alt="Motivator main page" />
                    </a>
                    <h3 className="card-title">Pineapple Motivator</h3>
                    <p>Motivational task manager</p>
                    <a className="nav-link link-info" href="https://github.com/DianGigrich/PineappleMotivator">
                        Github Repository
                    </a>
                    <p>team project, Javascript, Materialize</p>
                </section>

                <section className="col imagepadding cardborder" id="triviaquiz">
                    <a href="https://DianGigrich.github.io/TriviaQuiz/" target="_blank" rel="noopener noreferrer">
                        <img className="card-img-top border border-secondary rounded" src={trivia} alt="trivia pic" />
                    </a>
                    <h3 className="card-title">Genshin Impact Trivia Quiz</h3>
                    <p>Quiz we did as classwork. It's fun.</p>
                    <a className="nav-link link-info" href="https://github.com/DianGigrich/TriviaQuiz">
                        Github Repository
                    </a>
                    <p>Javascript</p>
                </section>

                <section className="col imagepadding cardborder" id="soccer">
                    <a href="http://elkplain-soccer.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img className="card-img-top border border-secondary rounded" src={Soccer} alt="soccer site pic" />
                    </a>
                    <h3 className="card-title">Soccer</h3>
                    <p>Keeping my kid's soccer team informed with all information in one easy place.</p>
                    <a className="nav-link link-info" href="https://github.com/DianGigrich/SoccerHub">
                        Github Repository
                    </a>
                    <p>React, MUI, HTML, CSS</p>
                </section>



            </div>
        </section>
    )
}

export default Portfolio;