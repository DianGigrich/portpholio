import React, { useSate } from 'react';

function Resume() {
    return (
        <div className="container mt-3">
            <div class="border rounded p-5 bg-white bg-opacity-50 shadow">
                <p>I have a bachelor's degree in Interdisciplinary Arts and Sciences from the University of Washington, a certificate from UW as well for Full Stack Web Development.  I have ten years of experience with customer service, working with teams, and learning and teaching technologies in various settings.</p>
                <p>Full Stack includes: REACT, MERN, Javascript, APIs, MySQL, Sequelize, HTML, CSS, and more</p>
                <p>Please check my LinkedIn for my qualifications, employment history, and endoresments.</p>
            <a className="btn border" href="https://www.linkedin.com/in/dian-sherman/" target="_blank">LinkedIn
            </a>
            </div>
        </div>
    )
}
export default Resume;
