import React from 'react';
import '../../index.css';



function Resume() {

    return (
        <>
            <section className="card-body cardborder">
                <h2 className="text-secondary">Hello</h2>
                <p>DianESherman@gmail.com</p>
                <h2 className="text-primary">Skills</h2>
                <ul><li>FRONT-END: React, Javascript, HTML5, jQuery, Material-UI, Bootstrap, CSS</li>
                    <li>BACK-END: MySQL, Node.js, MongoDB, Mongoose ODM, Express.js</li>
                    <li>CONCEPTS: APIs, REST, JSON, SSL certificates</li>
                </ul>
                <h2 className="text-info">Projects</h2>

                <h5><strong>Codescape</strong> - <i>Git Admin</i></h5>
                <ul>
                    <li><a href="https://codescape.netlify.app/">Site</a> &emsp;
                        <a href="https://github.com/DianGigrich/Codescape">Repo</a> </li>
                    <li>A virtual escape room for Javascript beginners to practice syntax.  Utilizes drag and drop</li>
                    <li>React, Javascript, Sequelize, SQL, Express, Interact.js</li>
                </ul>
                <h5><strong>Gloomhave Helper</strong> - <i>Project Manager</i></h5>
                <ul>
                    <li><a href="https://gloomhaven-helper-deluxe.herokuapp.com/">Site</a> &emsp;
                        <a href="https://github.com/Mattdack/gloomhaven-helper">Repo</a>  </li>
                    <li>An online tool to help play Gloomhaven boardgame-  a game full of tiny health point, turn, and effect trackers. Eliminates some of those annoying parts. </li>
                    <li>Javascript, Sequelize, SQL, Handlebars, Tailwind</li>
                    <li><b>Received an award for Best Functionality.</b></li>
                </ul>
                <h5><strong>Pineapple Motivator</strong> - <i>Project Manager</i></h5>
                <ul>
                    <li><a href="https://diangigrich.github.io/PineappleMotivator">Site</a> &emsp;
                        <a href="https://github.com/DianGigrich/PineappleMotivator">Repo</a>  </li>
                    <li>A hobby tracker that provides motivation. Get rewarded with a YouTube video related to your motivator.  It can switch to Pirate mode if you're feeling weird.</li>
                    <li>Javascript, HTML, CSS, Materialize</li>
                </ul>
                <h2 className="text-success">Education</h2>
                <h5><strong>University of Washington, Seattle</strong> - <i>Full Stack Web Developer Certificate</i> - SEP 2022-DEC 2022 </h5>
                <h5><strong>University of Washington, Tacoma</strong> - <i>Bachelor's in Interdisciplinary A and S</i> - SEP 2006-DEC 2008 </h5>
                <h2 className="text-warning">Employment</h2>
                <h5><strong>Costco Wholesale - Merchandiser</strong></h5>
                    <li>stocking merchandise in a clean straight manner; following the Five Rights, as they say</li>
                    <li>verifying correct pricing and placement of tags</li>
                <h5><strong>Jyve</strong> - <i>Merchandiser and Trainer</i></h5>
                <ul>
                    <li>stocked groceries  at two of the most profitable and highly rated Safeway/Albertsons  in the state. Was offered a management position by both store managers.</li>
                </ul>
                <h5><strong>Mosaic Sales Solutions</strong> - <i>Brand Ambassador for Samsung, Lifeproof, Otterbox</i></h5>
                <h5><strong>Puyallup School District</strong> - <i>Classified Substitute, Secretary</i></h5>

                <h5><strong>Regal Lakewood Stadium 15</strong> - <i>Associate Manager</i></h5>
                <ul>
                    <li>managing 3-20 employees with a team of managers</li>
                    <li>Management Certified Level 4, Booth Certified Level 1</li>
                    <li>reduced building energy consumption by 10%</li>
                    <li>set-up building document storage organization</li>
                </ul>
                <h2 className="text-danger">Volunteering</h2>
                <h5><strong>Elk Plain School of Choice</strong> - <i>weekly PTA popcorn volunteer</i> - current</h5>
                <h5><strong>Bethel Recreation</strong> - <i>Assistant Soccer Coach</i> - season ended</h5>
                <p><a href="https://elkplain-soccer.netlify.app">Our Team Soccer Site</a></p>







            </section>
        </>
    )
}
export default Resume;
