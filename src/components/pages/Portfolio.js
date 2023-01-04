import React from 'react'
import gloom from "../images/Gloomhaven-Helper.png"
import hobby from "../images/Hobby-Tracker.png"
import trivia from "../images/Trivia-Quiz.png"
import tech from "../images/techblog.png"
import code from "../images/Codescape.png"

function Portfolio() {

    return (
        <section className="container mt-3">
            <div className="row">
            <section class="col p-3 m-2 bg-white bg-opacity-50 shadow rounded border border-secondary" id="codescape">
                    <a href="https://codescape.herokuapp.com/">
                        <img className="card-img-top" src={code} alt="Codescape Screenshot" />
                    </a>
                    <h3 className="card-title">Codescape</h3>
                    <p>Play escape room mini-games to practice javascript syntax!</p>
                    <a href="https://github.com/DianGigrich/Codescape">
                        Github Repository Front-End
                    </a>
                    <br/>
                    <a href="https://github.com/DianGigrich/Codescape-backend">
                        Github Repository Back-End
                    </a>
                    <p>REACT team project. Sequelize, SQL database for backend.</p>
                    
                </section>
                <section class="col p-3 m-2 bg-white bg-opacity-50 shadow rounded border border-secondary" id="gloomhaven">
                    <a href="https://gloomhaven-helper-deluxe.herokuapp.com/">
                        <img className="card-img-top" src={gloom} alt="Gloomhaven Encounter Screenshot" />
                    </a>
                    <h3 className="card-title">Gloomhaven Helper</h3>
                    <p>Board game assistant to reduce clutter and minutia</p>
                    <a href="https://github.com/Mattdack/gloomhaven-helper">
                        Github Repository
                    </a>
                    <p>Handlebars, MVC, Sequelize, SQL</p>
                </section>

                <section className="col p-3 m-2 bg-white bg-opacity-50 shadow rounded border border-secondary" id="pineapple">
                    <a href="https://diangigrich.github.io/PineappleMotivator/">
                        <img class="card-img-top" src={hobby} alt="Motivator main page" />
                    </a>
                    <h3 className="card-title">Pineapple Motivator</h3>
                    <p>Motivational task manager</p>
                    <a href="https://github.com/DianGigrich/PineappleMotivator">
                        Github Repository
                    </a>
                </section>

                <section className="col p-3 m-2 bg-white bg-opacity-50 shadow rounded border border-secondary" id="Catbelly">
                    <a href="https://DianGigrich.github.io/TriviaQuiz/">
                        <img className="card-img-top" src={trivia} alt="Spotted Cat Belly" />
                    </a>
                    <h3 className="card-title">Genshin Impact Trivia Quiz</h3>
                    <p>Quiz we did as classwork. It's fun.</p>
                    <a href="https://github.com/DianGigrich/TriviaQuiz">
                        Github Repository
                    </a>
                </section>

                <section className="col p-3 m-2 bg-white bg-opacity-50 shadow rounded border border-secondary" id="Catbelly">
                    <a href="https://diansmvc-tech-blog.herokuapp.com/">
                        <img className="card-img-top" src={tech} alt="Spotted Cat Belly" />
                    </a>
                    <h3 className="card-title">Tech Blog</h3>
                    <p>Post and Comment on blogs.</p>
                    <a href="https://github.com/DianGigrich/MVC-Tech-Blog">
                        Github Repository
                    </a>
                    <p>MVC, Handelbars, Express</p>
                </section>



            </div>
        </section>
    )
}

export default Portfolio;