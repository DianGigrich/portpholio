import React from 'react'

function Portfolio() {

    return (
        <section className="container mt-3">
             <div className="row">
                <section class="col p-3 m-2 card" id="gloomhaven">
                    <a href="https://gloomhaven-helper-deluxe.herokuapp.com/">
                        <img className="card-img-top" src={require("../images/Gloomhaven-Helper.png").default} alt="Gloomhaven Encounter Screenshot"/>
                    </a>
                    <h3 className="card-title">Gloomhaven Helper</h3>
                </section>

                <article className="col">
                    <section className="col p-3 m-2 card" id="pineapple">
                        <a href="https://diangigrich.github.io/PineappleMotivator/">
                            <img class="card-img-top" src="../images/Hobby-Tracker.png" alt="Motivator main page"/>
                        </a>
                        <h3 className="card-title">Pineapple Motivator</h3>
                    </section>

                    <section className="col p-3 m-2 card" id="Catbelly">
                        <a href="https://DianGigrich.github.io/TriviaQuiz/">
                            <img className="card-img-top" src="../images/Trivia-Quiz.png" alt="Spotted Cat Belly"/>
                        </a>
                        <h3 className="card-title">Genshin Impact Trivia Quiz</h3>
                    </section>
                    <section className="col p-3 m-2 card" id="Catbelly">
                        <a href="https://diansmvc-tech-blog.herokuapp.com/">
                            <img className="card-img-top" src="../images/techblog.png" alt="Spotted Cat Belly"/>
                        </a>
                        <h3 className="card-title">Tech Blog</h3>
                    </section>
                    
                </article>
            </div>
        </section>
)
}

export default Portfolio;