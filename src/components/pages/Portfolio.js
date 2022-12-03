import React from 'react'

function MyPortfolio() {

    return (
        <section class="card">
            <h2 id="Work">Work</h2>

            <div class="workpics">
                <section id="gloomhaven">
                    <a href="https://gloomhaven-helper-deluxe.herokuapp.com/">
                        <img src="Assets/Images/Gloomhaven Helper.png" alt="Gloomhaven Encounter Screenshot"/>
                    </a>
                    <h3>Gloomhaven Helper</h3>
                </section>

                <article class="workpics1">
                    <section id="pineapple">
                        <a href="https://diangigrich.github.io/PineappleMotivator/">
                            <img src="Assets/Images//Hobby Tracker.png" alt="Motivator main page"/>
                        </a>
                        <h3>Pineapple Motivator</h3>
                    </section>

                    <section id="Catbelly">
                        <a href="">
                            <img src="Assets/Images/CatBelly.jpg" alt="Spotted Cat Belly"/>
                        </a>
                        <h3>Cat Belly</h3>
                    </section>
                </article>
            </div>
        </section>
)
}

export default MyPortfolio;