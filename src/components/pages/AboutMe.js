import React from 'react';
import dian from '../images/Dian.jpg';
import cat from "../images/little cat.jpg";
import '../../index.css';

function AboutMe() {
  return (
    <section className="container d-flex row-center mt-3">
      <article className="col-md-auto aboutpics" >
        <div className="row-md-auto">
          <img className="imagepadding img-thumbnail bg-white bg-opacity-25 border shadow" src={dian} alt="Dian Gigrich " />
        </div>
        <div className="row">
          <img className="imagepadding img-thumbnail bg-white bg-opacity-25 shadow" src={cat} alt="little kitty" />
        </div>
      </article>
      <article className="m-3 card row-md-auto align-items-center">
        <div className="card-body cardborder">
          <h3 className="card-title">About Me!</h3>
          <p className="card-text">
            I am a full stack web developer and a computer gamer. I am a DIY renovator and a project seamstress.  I find that sewing is the most like coding- it's meticulous, methodical, and sometimes frustrating having to redo something that just doesn't work right.
          </p>
          <p className="card-text">
            Recently I graduated from Full Stack Web Development bootcamp from the University of Washington.  It was very intense. I didn't realize I would enjoy coding, but I do!  
          </p>
          <p className="card-text">
            I volunteer with Bethel Recreation as an assistant soccer coach and volunteer at my daughter's school handing out popcorn at Friday recess for the PTA. I am also turning into a crazy cat lady, but three isn't too many, right?
          </p>
          <p className="card-text">
            Contact me directly! dianesherman@gmail.com
          </p>

        </div>
      </article>
      <article className="m-3 card row-md-auto align-items-center">
        <div className="card-body cardborder">
          <h3 className="card-title"> Technical Skills</h3>
          <ul>
            <li>
              <b>Programming Languages:</b>
              "HTML5, CSS3, Javascript"
            </li>
            <li>
              <b>Database Management:</b>
              "MySQL, Sequelize, MongoDB, Mongoose"
            </li>
            <li>
              <b>Frameworks/Libraries:</b>
              "jQuery, React.js, Express.js, Bootstrap, Materialize, Material UI, Interact.js"
            </li>
            <li>
              <b>Other:</b>
              "Node.js, Handlebars, Git, Heroku, Netlify"
            </li>
          </ul>
        </div>
      </article>
    </section >
  );
}

export default AboutMe;
