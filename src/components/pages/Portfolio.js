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
            <section class="col p-3 m-2 bg-white bg-opacity-50 shadow rounded" id="codescape">
                    <a href="https://codescape.herokuapp.com/">
                        <img className="card-img-top" src={code} alt="Codescape Screenshot" />
                    </a>
                    <h3 className="card-title">Codescape</h3>
                </section>
                <section class="col p-3 m-2 bg-white bg-opacity-50 shadow rounded" id="gloomhaven">
                    <a href="https://gloomhaven-helper-deluxe.herokuapp.com/">
                        <img className="card-img-top" src={gloom} alt="Gloomhaven Encounter Screenshot" />
                    </a>
                    <h3 className="card-title">Gloomhaven Helper</h3>
                </section>

                <section className="col p-3 m-2 bg-white bg-opacity-50 shadow rounded" id="pineapple">
                    <a href="https://diangigrich.github.io/PineappleMotivator/">
                        <img class="card-img-top" src={hobby} alt="Motivator main page" />
                    </a>
                    <h3 className="card-title">Pineapple Motivator</h3>
                </section>

                <section className="col p-3 m-2 bg-white bg-opacity-50 shadow rounded" id="Catbelly">
                    <a href="https://DianGigrich.github.io/TriviaQuiz/">
                        <img className="card-img-top" src={trivia} alt="Spotted Cat Belly" />
                    </a>
                    <h3 className="card-title">Genshin Impact Trivia Quiz</h3>
                </section>
                <section className="col p-3 m-2 bg-white bg-opacity-50 shadow rounded" id="Catbelly">
                    <a href="https://diansmvc-tech-blog.herokuapp.com/">
                        <img className="card-img-top" src={tech} alt="Spotted Cat Belly" />
                    </a>
                    <h3 className="card-title">Tech Blog</h3>
                </section>



            </div>
        </section>
    )
}

export default Portfolio;