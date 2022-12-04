import React from 'react'

function Portfolio() {

    return (
        <section class="container">
            <h2 id="Work">Portfolio</h2>

            <div class="container">
                <section class="card" id="gloomhaven">
                    <a href="https://gloomhaven-helper-deluxe.herokuapp.com/">
                        <img class="card-img-top" src="../../assets/images/Gloomhaven Helper.png" alt="Gloomhaven Encounter Screenshot"/>
                    </a>
                    <h3 class="card-title">Gloomhaven Helper</h3>
                </section>

                <article class="workpics1">
                    <section id="pineapple">
                        <a href="https://diangigrich.github.io/PineappleMotivator/">
                            <img class="card-img-top" src="../../assets/images/Hobby Tracker.png" alt="Motivator main page"/>
                        </a>
                        <h3 class="card-title">Pineapple Motivator</h3>
                    </section>

                    <section class="card" id="Catbelly">
                        <a href="">
                            <img class="card-img-top" src="Assets/Images/CatBelly.jpg" alt="Spotted Cat Belly"/>
                        </a>
                        <h3 class="card-title">Cat Belly</h3>
                    </section>
                </article>
            </div>
        </section>
)
}

export default Portfolio;